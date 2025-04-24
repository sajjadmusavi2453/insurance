export const errorMessages = {
  required: "فیلد الزامی است",
  email: "فرمت ایمیل نامعتبر است",
  phone: "فرمت شماره تلفن نامعتبر است",
  minLength: (min: number) => `باید حداقل ${min} کاراکتر باشد`,
  maxLength: (max: number) => `باید حداکثر ${max} کاراکتر باشد`,
  min: (min: number) => `باید کمتر از ${min}  باشد`,
  max: (max: number) => `باید بیشتر از ${max}  باشد`,
  sameAs: "This field must be the same as the password",
};