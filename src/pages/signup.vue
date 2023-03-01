<template>
  <div class="register-wrapper">
    <h2>用户登录</h2>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      :rules="rules"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      @validate="handleValidate"
    >
      <a-form-item label="email" name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item label="phone" name="phone">
        <a-input-password v-model:value="formState.phone" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      email: "",
      phone: "",
      remember: true,
    });
    let validate = async (_rule, value) => {
      console.log("12121", value);
      if (!/^(186|135)\d{8}$/.test(value)) {
        return Promise.reject("只允许输入以186、135的11位数字输入");
      } else {
        return Promise.resolve();
      }
    };
    const rules = {
      email: [
        {
          required: true,
          validator: validate,
          trigger: "blur",
        },
      ],
      phone: [
        {
          required: true,
          validator: validate,
          trigger: "blur",
        },
      ],
    };
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const handleValidate = (...args) => {
      console.log(args);
    };
    return {
      formState,
      onFinish,
      rules,
      onFinishFailed,
      handleValidate,
    };
  },
});
</script>
<style>
.register-wrapper {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
