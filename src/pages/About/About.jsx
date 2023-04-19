import React from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/Group 1744.png";
import house from "../../assets/img-home-e1581520380712 1.png";
import cloud from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 17 (1).png";
import cloudVariant from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 18.png";
import shepki from "../../assets/shepki 4.png";
import houseSummer from "../../assets/02 - summer 1.png";
import principles from "../../assets/photo_2022-01-13_15-51-54 6 (1).png";
import review from "../../assets/photo_2022-01-13_15-52-04 2.png";
import personImg from "../../assets/personImg.png";
import bgReviews from "../../assets/00a8246c092185606e122eab3660496a 1.png";
import cloud2 from "../../assets/1-14781_white-clouds-png-clipart-baby-e-kill-the 15.png";
import roman from "../../assets/IMG_1340 1.png";

import styles from "./About.module.scss";

import {
  Container,
  Excursion,
  Garanties,
  MainForm,
  MenuButton,
  SimpleGallery,
  SliderBtn,
  VideoLink,
} from "../../components";
import { CheckVariant, House, SpinArrow, SmallArrow } from "../../icons";

export const About = () => {
  return (
    <section className={styles.about}>
      <Container>
        <MainForm />
        <div className={styles.history}>
          <h3 className={classNames("titleBlock", styles.title)}>
            История возникновения компании House-Story{" "}
          </h3>

          <div className={styles.content}>
            <div className={styles.text}>
              <h4 className={styles.titleContent}>Как все начиналось?</h4>
              <p className={styles.text}>
                Основатель компании Стародубцев Егор работает в сфере
                строительства с 2009 года. С 2009 по 2013 года работал в ООО
                «Гидбурсервис» в сфере отопления, водоснабжения и канализации. С
                2013 по 2016 года — в ЗАО «МРЭСС» в сфере энергетики в г. Сочи
                на Олимпийских объектах, а так же учавствовал в строительстве
                энергомоста в Крыму. В одной из командировок в Сыктывкар,
                посетив завод по изготовлению деревянных домов , был очень
                впечатлен. Четко поставленные процессы, слаженная работа опытных
                специалистов, превосходный результат — такую строительную
                компанию увидел Егор и захотел создать свою, основываясь на
                полученном за годы работы опыте. Что он и сделал в 2016 году —
                открыл ИП и поставил цель занять достойное место на российском
                (и не только) строительном рынке.
              </p>
            </div>
            <img className={styles.img} src={img1} alt="" />
          </div>
          <div className={styles.content}>
            <img className={styles.img} src={img1} alt="" />
            <div className={styles.text}>
              <h4 className={styles.titleContent}>Знакомство с Романом</h4>
              <p className={styles.text}>
                Пожарицкий Роман — руководитель маркетингового агентства «Alfa
                Digital Agency». За годы работы в сфере создания и продвижения
                сайтов накопил большой опыт сотрудничества со строительными и
                ремонтными кампаниями. Когда опыта стало так много, что
                захотелось им делиться, пришла идея найти толкового партнера и
                объединить свои силы для достижения максимального результата.
                Перед тем, как начать сотрудничать с Егором, Роман отсеял около
                25 строительных компаний в ходе переговоров. Только подход Егора
                совпал с видением Романа на то, как надо строить и продвигать
                строительный бизнес в онлайне. Желание работать и умение
                качественного обрабатывать входящие заявки послужили толчком к
                объединению усилий и началу партнерства.
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <h4 className={styles.titleContent}>Первые заказы</h4>
              <p className={styles.text}>
                Самой важной и трудной задачей на начальном этапе было найти
                бригаду опытных, надежных плотников и нацеленных на долгое
                сотрудничество поставщиков качественных материалов. Здесь
                помогли знакомства Егора, накопленные за время работы в
                строительстве, а также пригодились связи Романа. В итоге над
                проектом работала бригада из четырех плотников с опытом более 20
                лет в строительстве домов из оцилиндрованного бревна. Результат
                — качественно постороенный за 45 дней дом и благодарные отзывы
                клиента. После нескольких успешных проектов было принятно
                решение создать сайт с каталогом работ. Запустили рекламу и
                получили крупный заказ в течение двух месяцев после получения
                первых заявок.
              </p>
            </div>
            <img className={styles.img} src={img1} alt="" />
          </div>
        </div>
        <div className={styles.chronology}>
          <SpinArrow className={styles.iconArrow1} />
          <SpinArrow className={styles.iconArrow2} />
          <SpinArrow className={styles.iconArrow3} />
          <h3 className={styles.titleContent}>Хронология развития компании</h3>
          <div className={styles.datesContent}>
            <div className={styles.item}>
              <h4 className={styles.year}>2016</h4>
              <div className={styles.desc}>
                <House />
                <p className={styles.descText}>
                  <span>За первый год работы построили 20 домов,</span> пока без
                  работ по внутренней отделке. Часть прибыли была потрачена на
                  обучение специалистов.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.year}>2017</h4>
              <div className={styles.desc}>
                <House />
                <p className={styles.descText}>
                  <span>За первый год работы построили 20 домов,</span> пока без
                  работ по внутренней отделке. Часть прибыли была потрачена на
                  обучение специалистов.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.year}>2018</h4>
              <div className={styles.desc}>
                <House />
                <p className={styles.descText}>
                  <span>За первый год работы построили 20 домов,</span> пока без
                  работ по внутренней отделке. Часть прибыли была потрачена на
                  обучение специалистов.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.year}>2023</h4>
              <div className={styles.desc}>
                <House />
                <p className={styles.descText}>
                  <span>За первый год работы построили 20 домов,</span> пока без
                  работ по внутренней отделке. Часть прибыли была потрачена на
                  обучение специалистов.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.photos}>
          <div className={styles.tabsBlock}>
            <button className={styles.tab}>Наш офис</button>
            <button className={styles.tab}>Производство</button>
            <button className={styles.tab}>Склад</button>
          </div>
          <div className={styles.imagesBlock}>
            <div className={styles.images}>
              <SimpleGallery />
            </div>
            <MenuButton title="Смотреть подробнее" className={styles.btn} />
          </div>
        </div>
        <Excursion houseImg={true} />
        <div className={styles.howWeWork}>
          <h3 className={classNames("titleBlock", styles.titleHowWeWork)}>
            Как мы работаем
          </h3>
          <div className={styles.cards}>
            <div className={styles.column}>
              <div className={styles.card}>
                <h4 className={styles.number}>1</h4>
                <h4 className={styles.textNumber}>Заявка</h4>
                <p className={styles.descNumber}>
                  Оставляете заявку на ремонт и встречаетесь с замерщиком
                </p>
              </div>
              <div className={styles.card}>
                <h4 className={styles.number}>4</h4>
                <h4 className={styles.textNumber}>Ремонт и прием работы</h4>
                <p className={styles.descNumber}>
                  Производится ремонт под ключ, каждый этап принимается вами.
                  Если нужны корректировки, то мы вносим их.
                </p>
              </div>
            </div>
            <div className={classNames(styles.column, styles.middleColumn)}>
              <div className={styles.card}>
                <h4 className={styles.number}>2</h4>
                <h4 className={styles.textNumber}>Расчет стоимости</h4>
                <p className={styles.descNumber}>
                  Получаете первичное предложение с расчетом стоимости ремонта
                  под ключ с погрешностью 5%
                </p>
              </div>
              <div>
                <img src={house} alt="" />
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.card}>
                <h4 className={styles.number}>3</h4>
                <h4 className={styles.textNumber}>Смета</h4>
                <p className={styles.descNumber}>
                  Составляем смету на основе расчетных данных
                </p>
              </div>
              <div className={styles.card}>
                <h4 className={styles.number}>5</h4>
                <h4 className={styles.textNumber}>Оплата</h4>
                <p className={styles.descNumber}>
                  Проводится поэтапная работа (до 10 этапов), каждый этап
                  оплачивается отдельно по завершению
                </p>
              </div>
            </div>
          </div>
          <MenuButton className={styles.btnDark} title="Смотреть подробнее" />
          <img className={styles.cloud} src={cloud} alt="" />
          <img className={styles.shepki} src={shepki} alt="" />
        </div>
        <div className={styles.clients}>
          <h3 className={classNames("titleBlock", styles.title)}>
            Более 117 построенных домов и довольных клиентов
          </h3>
          <p className={styles.subtitle}>
            Работаем на репутацию, поэтому с ответственностью подходим к каждому
            проекту
          </p>
          <div className={styles.clientsContent}>
            <img className={styles.cloudClient} src={cloudVariant} alt="" />
            <div className={styles.imgWrapper}>
              <img className={styles.houseImg} src={houseSummer} alt="" />
            </div>
            <div className={styles.clientsCards}>
              <div className={styles.clientCard}>
                <p className={styles.cardTitle}>Собственное производство</p>
                <p className={styles.cardDesc}>
                  На рынке строительных услуг больше <span>30</span> лет{" "}
                </p>
              </div>
              <div className={styles.clientCard}>
                <p className={styles.cardTitle}>Маркетинговые услуги</p>
                <p className={styles.cardDesc}>
                  Опыт работы в строительном маркетинге более <span>10</span>{" "}
                  лет
                </p>
              </div>
              <div className={styles.clientCard}>
                <p className={styles.cardTitle}>
                  Возможность закупки материалов по себестоимости
                </p>
                <p className={styles.cardDesc}>
                  Вы сможете сэкономить до <span>30%</span> на материалах.
                </p>
              </div>
              <div className={styles.clientCard}>
                <p className={styles.cardTitle}>
                  Возможность посетить строящиеся объекты
                </p>
                <p className={styles.cardDesc}>
                  Более <span>117</span> построенных домов.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.principles}>
          <h3 className={classNames("titleBlock", styles.title)}>
            За годы существования компании мы сформировали основные принципы
            нашей работы, от которых никогда не отступаем:
          </h3>
          <div className={styles.principlesWrapper}>
            <div className={styles.textWrapper}>
              <div className={styles.itemPrinciples}>
                <CheckVariant />
                <p className={styles.itemText}>
                  <span>Клиент всегда прав</span>, но он может не знать, как
                  лучше. Поэтому наша задача, как специалистов, показать все
                  наилучшие варианты для выполнения задачи заказчика.
                </p>
              </div>
              <div className={styles.itemPrinciples}>
                <CheckVariant />
                <p className={styles.itemText}>
                  <span>Репутация — наше всё</span>. За каждый заказ мы несем
                  личную ответственность — от руководителя до специалиста
                  рабочей (строительной) бригады. Мы прекрасно знаем, как
                  работает «сарафанное радио», поэтому не рискуем выполнять
                  работу спустя рукава.
                </p>
              </div>
              <div className={styles.itemPrinciples}>
                <CheckVariant />
                <p className={styles.itemText}>
                  <span>Все условия прописаны в договоре</span>. Не важно, как
                  вы к нам пришли — по рекомендации знакомых или из интернета —
                  основой нашего сотрудничества является договор. Это гарантия
                  взаимопонимания клиента и исполнителя.
                </p>
              </div>
            </div>

            <img className={styles.principlesImg} src={principles} alt="" />
          </div>
        </div>
        <Garanties classNameWrapper={styles.garantiesWrapper} title={true} />
        <div className={styles.gratitude}>
          <img className={styles.bg} src={bgReviews} alt="" />
          <img className={styles.reviewBg} src={cloudVariant} alt="" />
          <img className={styles.reviewCloud} src={cloud2} alt="" />
          <h3 className={classNames("titleBlock", styles.title)}>
            Благодарность клиентов — главная гарантия нашей надежности и
            профессионализма
          </h3>
          <div className={styles.videoReview}>
            <VideoLink
              classNameWrapper={styles.videoWrapper}
              poster={review}
              src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            />
            <div className={styles.reviewText}>
              <p className={styles.date}>24.10.2019</p>
              <h4 className={styles.name}>Сергей Миронов</h4>
              <p className={styles.reviewDesc}>
                Огромное спасибо за профессиональный подход к делу! Когда встал
                вопрос о выборе компании для строительства дома, решили сразу,
                только Зодчий. Цена, качество, сроки строительства, по этим
                категориям конкурентов нет.
              </p>
              <button className={styles.readMore}>
                <p className={styles.btnText}>Читать дальше</p>
                <SmallArrow className={styles.iconArrow} />
              </button>
              <MenuButton
                className={styles.btnReview}
                title="Смотреть все видеоотзывы"
              />
            </div>
          </div>
          <div className={styles.reviewSlider}>
            <Swiper
              style={{ position: "unset" }}
              slidesPerView={2}
              spaceBetween={40}
            >
              <SwiperSlide>
                <div className={styles.sliderCard}>
                  <img className={styles.personImg} src={personImg} alt="" />
                  <div className={styles.reviewText}>
                    <p className={styles.date}>24.10.2019</p>
                    <h4 className={styles.name}>Сергей Миронов</h4>
                    <p className={styles.reviewDesc}>
                      Огромное спасибо за профессиональный подход к делу! Когда
                      встал вопрос о выборе компании для строительства дома,
                      решили сразу, только Зодчий. Цена, качество, сроки
                      строительства, по этим категориям конкурентов нет.
                    </p>
                    <button className={styles.readMore}>
                      <p className={styles.btnText}>Читать дальше</p>
                      <SmallArrow className={styles.iconArrow} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.sliderCard}>
                  <img className={styles.personImg} src={personImg} alt="" />
                  <div className={styles.reviewText}>
                    <p className={styles.date}>24.10.2019</p>
                    <h4 className={styles.name}>Сергей Миронов</h4>
                    <p className={styles.reviewDesc}>
                      Огромное спасибо за профессиональный подход к делу! Когда
                      встал вопрос о выборе компании для строительства дома,
                      решили сразу, только Зодчий. Цена, качество, сроки
                      строительства, по этим категориям конкурентов нет.
                    </p>
                    <button className={styles.readMore}>
                      <p className={styles.btnText}>Читать дальше</p>
                      <SmallArrow className={styles.iconArrow} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.sliderCard}>
                  <img className={styles.personImg} src={personImg} alt="" />
                  <div className={styles.reviewText}>
                    <p className={styles.date}>24.10.2019</p>
                    <h4 className={styles.name}>Сергей Миронов</h4>
                    <p className={styles.reviewDesc}>
                      Огромное спасибо за профессиональный подход к делу! Когда
                      встал вопрос о выборе компании для строительства дома,
                      решили сразу, только Зодчий. Цена, качество, сроки
                      строительства, по этим категориям конкурентов нет.
                    </p>
                    <button className={styles.readMore}>
                      <p className={styles.btnText}>Читать дальше</p>
                      <SmallArrow className={styles.iconArrow} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SliderBtn icon={null} direction="next" />
              <SliderBtn icon={null} direction="prev" />
            </Swiper>
          </div>
        </div>
        <div className={styles.keyPersons}>
          <h3 className={classNames("titleBlock", styles.title)}>
            Ключевые лица компании, ответственные за результат
          </h3>
          <div className={styles.personsContent}>
            <div className={styles.imgRoman}>
              <img src={roman} alt="" />
              <h4 className={styles.personName}>Пожарицкий Роман Николаевич</h4>
            </div>
            <div className={styles.contentDesc}>
              <h4 className={styles.descTitle}>Основные компетенции</h4>
              <div className={styles.competentions}>
                <div className={styles.competentionBlock}>
                  <div className={styles.competentionItem}>
                    <h4 className={styles.competentionNumber}>1</h4>
                    <h4 className={styles.itemTitle}>Компетенция</h4>
                  </div>
                  <div className={styles.competentionDesc}>
                    Получаете первичное предложение с расчетом стоимости ремонта
                    под ключ с погрешностью 5%
                  </div>
                </div>
                <div className={styles.competentionBlock}>
                  <div className={styles.competentionItem}>
                    <h4 className={styles.competentionNumber}>2</h4>
                    <h4 className={styles.itemTitle}>Компетенция</h4>
                  </div>
                  <div className={styles.competentionDesc}>
                    Получаете первичное предложение с расчетом стоимости ремонта
                    под ключ с погрешностью 5%
                  </div>
                </div>
                <div className={styles.competentionBlock}>
                  <div className={styles.competentionItem}>
                    <h4 className={styles.competentionNumber}>3</h4>
                    <h4 className={styles.itemTitle}>Компетенция</h4>
                  </div>
                  <div className={styles.competentionDesc}>
                    Получаете первичное предложение с расчетом стоимости ремонта
                    под ключ с погрешностью 5%
                  </div>
                </div>
                <div className={styles.competentionBlock}>
                  <div className={styles.competentionItem}>
                    <h4 className={styles.competentionNumber}>4</h4>
                    <h4 className={styles.itemTitle}>Компетенция</h4>
                  </div>
                  <div className={styles.competentionDesc}>
                    Получаете первичное предложение с расчетом стоимости ремонта
                    под ключ с погрешностью 5%
                  </div>
                </div>
                <div className={styles.competentionBlock}>
                  <div className={styles.competentionItem}>
                    <h4 className={styles.competentionNumber}>5</h4>
                    <h4 className={styles.itemTitle}>Компетенция</h4>
                  </div>
                  <div className={styles.competentionDesc}>
                    Получаете первичное предложение с расчетом стоимости ремонта
                    под ключ с погрешностью 5%
                  </div>
                </div>
                <div className={styles.competentionBlock}>
                  <div className={styles.competentionItem}>
                    <h4 className={styles.competentionNumber}>6</h4>
                    <h4 className={styles.itemTitle}>Компетенция</h4>
                  </div>
                  <div className={styles.competentionDesc}>
                    Получаете первичное предложение с расчетом стоимости ремонта
                    под ключ с погрешностью 5%
                  </div>
                </div>
              </div>
              <div className={styles.persons}></div>
            </div>
          </div>
        </div>
        <Excursion houseImg={true} cloudImg={true} />
      </Container>
    </section>
  );
};
