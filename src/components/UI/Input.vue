<template>
  <div>
    <h3>Поиск</h3>
    <div class="input-wrapper">
      <div class="flex">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Поиск..."
          :class="{
            'input-error': !$v.searchQuery.$pending && !$v.searchQuery.$model,
          }"
        />
        <button @click="handleSearch" class="btn-search">Поиск</button>
      </div>
      <p
        v-if="!$v.searchQuery.$pending && !$v.searchQuery.$model"
        class="error-message"
      >
        Запрос поиска обязателен.
      </p>
    </div>

    <h3>Поле с подсказкой</h3>
    <div class="input-wrapper">
      <input
        v-model="tooltipInput"
        type="text"
        @focus="showTooltip = true"
        @blur="showTooltip = false"
        placeholder="Наведи для подсказки"
        :class="{
          'input-error': !$v.tooltipInput.$pending && !$v.tooltipInput.$model,
        }"
      />
      <div v-if="showTooltip" class="tooltip">Это подсказка</div>
      <p
        v-if="!$v.tooltipInput.$pending && !$v.tooltipInput.$model"
        class="error-message"
      >
        Поле с подсказкой обязательно для заполнения.
      </p>
    </div>

    <!-- Поле Email -->
    <h3>Email</h3>
    <div class="input-wrapper">
      <input
        v-model="emailField"
        type="email"
        placeholder="Введите ваш email"
        :class="{
          'input-error': !$v.emailField.$pending && !$v.emailField.$invalid,
        }"
      />
      <p
        v-if="!$v.emailField.$pending && $v.emailField.$invalid"
        class="error-message"
      >
        Неверный формат email. Убедитесь, что email содержит символ `@`.
      </p>
    </div>

    <h3>Пароль</h3>
    <div class="input-wrapper">
      <input
        v-model="password"
        type="password"
        placeholder="Введите ваш пароль к примеру K7Z*$Q3PS/"
        :class="{ 'input-error': $v.password.$error }"
      />
      <!-- Ошибка обязательного поля -->
      <p
        v-if="$v.password.$error && $v.password.required"
        class="error-message"
      >
        Пароль обязателен.
      </p>
      <!-- Ошибка минимальной длины -->
      <p
        v-if="$v.password.$error && $v.password.minLength"
        class="error-message"
      >
        {{ $v.password.minLength.$message }}
      </p>
      <!-- Ошибка отсутствия заглавной буквы -->
      <p
        v-if="$v.password.$error && $v.password.containsUppercase"
        class="error-message"
      >
        {{ $v.password.containsUppercase.$message }}
      </p>
      <!-- Ошибка отсутствия цифры -->
      <p
        v-if="$v.password.$error && $v.password.containsNumber"
        class="error-message"
      >
        {{ $v.password.containsNumber.$message }}
      </p>
      <!-- Ошибка отсутствия специального символа -->
      <p
        v-if="$v.password.$error && $v.password.containsSpecial"
        class="error-message"
      >
        {{ $v.password.containsSpecial.$message }}
      </p>
    </div>

    <h3>Дата</h3>
    <div class="input-wrapper">
      <input
        v-model="date"
        type="date"
        :class="{ 'input-error': !$v.date.$pending && !$v.date.$model }"
      />
      <p v-if="!$v.date.$pending && !$v.date.$model" class="error-message">
        Пожалуйста, выберите дату.
      </p>
    </div>

    <h3>Textarea</h3>
    <div class="input-wrapper">
      <textarea
        v-model="textarea"
        placeholder="Введите ваше сообщение"
        :class="{ 'input-error': !$v.textarea.$pending && !$v.textarea.$model }"
      ></textarea>
      <p
        v-if="!$v.textarea.$pending && !$v.textarea.$model"
        class="error-message"
      >
        Сообщение обязательно для заполнения.
      </p>
    </div>

    <h3>Выбор (Select)</h3>
    <div class="input-wrapper">
      <select
        v-model="selectedOption"
        :class="{
          'input-error':
            !$v.selectedOption.$pending && !$v.selectedOption.$model,
        }"
      >
        <option disabled value="">Пожалуйста, выберите вариант</option>
        <option value="option1">Вариант 1</option>
        <option value="option2">Вариант 2</option>
        <option value="option3">Вариант 3</option>
      </select>
      <p
        v-if="!$v.selectedOption.$pending && !$v.selectedOption.$model"
        class="error-message"
      >
        Пожалуйста, выберите вариант.
      </p>
    </div>

    <h3>Checkbox</h3>
    <div class="input-wrapper">
      <label class="checkbox-label">
        <input v-model="checked" type="checkbox" />
        Принять условия
      </label>
      <p
        v-if="!$v.checked.$pending && !$v.checked.$model"
        class="error-message"
      >
        Вы должны согласиться с условиями.
      </p>
    </div>

    <h3>Radio Buttons</h3>
    <div class="input-wrapper">
      <label class="radio-label">
        <input v-model="picked" type="radio" value="option1" />
        Вариант 1
      </label>
      <label class="radio-label">
        <input v-model="picked" type="radio" value="option2" />
        Вариант 2
      </label>
      <p v-if="!$v.picked.$pending && !$v.picked.$model" class="error-message">
        Пожалуйста, выберите один из вариантов.
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers, minLength } from "@vuelidate/validators";

export default {
  name: "Input",
  setup() {
    // Определение полей формы как реактивные переменные
    const searchQuery = ref("");
    const tooltipInput = ref("");
    const emailField = ref("");
    const password = ref("");
    const date = ref("");
    const textarea = ref("");
    const selectedOption = ref("");
    const checked = ref(false);
    const picked = ref("");

    // Кастомные валидаторы для пароля
    const containsUppercase = helpers.withMessage(
      "Должна быть хотя бы одна заглавная буква",
      (value) => /[A-Z]/.test(value)
    );
    const containsNumber = helpers.withMessage(
      "Должна быть хотя бы одна цифра",
      (value) => /\d/.test(value)
    );
    const containsSpecial = helpers.withMessage(
      "Должен быть хотя бы один специальный символ",
      (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value)
    );

    // Правила валидации для всех полей формы
    const validations = {
      searchQuery: { required },
      tooltipInput: { required },
      emailField: {
        required,
        email,
      },
      password: {
        required,
        minLength: helpers.withMessage(
          "Пароль должен содержать минимум 8 символов",
          minLength(8)
        ),
        containsUppercase,
        containsNumber,
        containsSpecial,
      },
      date: { required },
      textarea: { required },
      selectedOption: { required },
      checked: { required },
      picked: { required },
    };

    // Vuelidate с автоматической валидацией и установкой dirty статуса
    const $v = useVuelidate(
      validations,
      {
        searchQuery,
        tooltipInput,
        emailField,
        password,
        date,
        textarea,
        selectedOption,
        checked,
        picked,
      },
      {
        $autoDirty: true, // Поле считается изменённым сразу после ввода
        $autoValidate: true, // Автоматическая валидация при изменении значения
      }
    );

    // Функция для обработки поиска
    const handleSearch = () => {
      alert(`Искать: ${searchQuery.value}`);
    };

    // Видимость подсказки
    const showTooltip = ref(false);

    return {
      searchQuery,
      tooltipInput,
      emailField,
      password,
      date,
      textarea,
      selectedOption,
      checked,
      picked,
      showTooltip,
      $v,
      handleSearch,
    };
  },
};
</script>

<style scoped>
.input-wrapper {
  margin-bottom: 20px;
  position: relative;
}

input,
textarea,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #6200ea;
}

.input-error {
  border-color: #f44336;
}

.error-message {
  color: #f44336;
  font-size: 12px;
  margin: 5px 0 0;
}

.btn-search {
  padding: 10px;
  margin-left: 5px;
  border: none;
  background-color: #6200ea;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.btn-search:hover {
  background-color: #3700b3;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 5px;
  background-color: #333;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
}

.checkbox-label,
.radio-label {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 5px;
  white-space: nowrap;
}

.checkbox-label input,
.radio-label input {
  margin-right: 10px;
}
</style>
