import React from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Case,
  CheckShield,
  Clock,
  Credit,
  List,
  Manager,
  Payment,
  PhotoReport,
} from "../icons";

export const garanties = [
  {
    id: uuidv4(),
    Icon: <Clock />,
    title: "Соблюдаем сроки",
    description: "Несем ответственность за соблюдение сроков выполнения работ.",
  },
  {
    id: uuidv4(),
    Icon: <CheckShield />,
    title: "Гарантия до 50 лет",
    description: "Опытная команда мастеров с профессиональным оборудованием",
  },
  {
    id: uuidv4(),
    Icon: <Case />,
    title: "Прозрачная смета",
    description: "Фиксируем стоимость работ в договоре.",
  },
  {
    id: uuidv4(),
    Icon: <List />,
    title: "40 указ президента ",
    description: "Соблюдаем все правовые нормы.",
  },
  {
    id: uuidv4(),
    Icon: <Credit />,
    title: "Кредиты",
    description: "Работаем с кредитами и рассрочками",
  },
  {
    id: uuidv4(),
    Icon: <Payment />,
    title: "Поэтапная оплата",
    description: "Оплата каждого этапа работ производится по факту выполнения",
  },
  {
    id: uuidv4(),
    Icon: <PhotoReport />,
    title: "Фотоотчёт ",
    description:
      "1 раз в неделю отправляем фотографии с отчетом о проделанной работе",
  },
  {
    id: uuidv4(),
    Icon: <Manager />,
    title: "Личный менеджер",
    description:
      "Вы всегда можете написать или позвонить, уточнить детали о ходе работы",
  },
];
