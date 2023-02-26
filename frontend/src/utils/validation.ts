import { error } from "./toast";

export function validateClinic(
  name: string,
  city: string,
  address: string,
): boolean {
  if (!name) {
    error("Ошибка", "Поле 'Название клиники' должно быть заполнено");
    return false;
  }

  if (!city) {
    error("Ошибка", "Поле 'Поле 'Город' должно быть заполнено");
    return false;
  }

  if (!address) {
    error("Ошибка", "Поле 'Поле 'Адрес' должно быть заполнено");
    return false;
  }

  return true;
}

export function validateDoctor(
  firstName: string,
  lastName: string,
  exp: string,
  spec: string,
): boolean {
  if (!firstName) {
    error("Ошибка", "Поле 'Фамилия' должно быть заполнено");
    return false;
  }

  if (!lastName) {
    error("Ошибка", "Поле 'Поле 'Имя' должно быть заполнено");
    return false;
  }

  if (!exp) {
    error("Ошибка", "Поле 'Опыт' должно быть заполнено");
    return false;
  }

  if (!spec) {
    error("Ошибка", "Поле 'Специализация' должно быть заполнено");
    return false;
  }

  return true;
}
