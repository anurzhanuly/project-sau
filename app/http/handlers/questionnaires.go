package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Questionnaires(c *gin.Context, di *di.DI) {
	data := `{
       "value": "item1",
       "text": "< 8"
      },
      {
       "value": "item2",
       "text": "8 - 12"
      },
      {
       "value": "item3",
       "text": "> 12"
      }
     ],
     "maxSelectedChoices": 1
    },
    {
     "type": "boolean",
     "name": "question17",
     "title": "Вы курите? ",
     "labelTrue": "Нет",
     "labelFalse": "Да"
    },
    {
     "type": "checkbox",
     "name": "question18",
     "visibleIf": "{question17} = false",
     "title": "Сколько сигарет в день вы курите? ",
     "choices": [
      {
       "value": "item1",
       "text": "< 5"
      },
      {
       "value": "item2",
       "text": " 5 - 9"
      },
      {
       "value": "item3",
       "text": "10 - 19"
      },
      {
       "value": "item4",
       "text": "> 20"
      }
     ],
     "maxSelectedChoices": 1
    },
    {
     "type": "checkbox",
     "name": "question19",
     "visibleIf": "{question17} = false",
     "title": "Сколько вы курите?",
     "choices": [
      {
       "value": "item1",
       "text": "< 1"
      },
      {
       "value": "item2",
       "text": "1 - 4"
      },
      {
       "value": "item3",
       "text": "5 - 9"
      },
      {
       "value": "item4",
       "text": "> 10"
      }
     ],
     "maxSelectedChoices": 1
    },
    {
     "type": "boolean",
     "name": "question20",
     "title": "Вы раньше курили на постоянной основе? ",
     "labelTrue": "Нет",
     "labelFalse": "Да"
    },
    {
     "type": "checkbox",
     "name": "question21",
     "visibleIf": "{question20} = false",
     "title": "Как долго вы курили перед тем как бросить курить?",
     "description": "В лет ",
     "choices": [
      {
       "value": "item1",
       "text": "< 1 года"
      },
      {
       "value": "item2",
       "text": "1 - 4"
      },
      {
       "value": "item3",
       "text": "5 - 9"
      },
      {
       "value": "item4",
       "text": "> 10"
      }
     ],
     "maxSelectedChoices": 1
    },
    {
     "type": "checkbox",
     "name": "question22",
     "title": "Ваш уровень физической активности?",
     "choices": [
      {
       "value": "item1",
       "text": "Прогулка"
      },
      {
       "value": "item2",
       "text": "Активный спорт"
      },
      {
       "value": "item3",
       "text": "В основном сидячий, малоподвижный "
      }
     ],
     "maxSelectedChoices": 1
    },
    {
     "type": "checkbox",
     "name": "question23",
     "title": "Ваш рацион питания? ",
     "choices": [
      {
       "value": "item1",
       "text": "Полезный (больше фруктов и овощей)"
      },
      {
       "value": "item2",
       "text": "не полезный (больше мяса и жирного)"
      }
     ],
     "maxSelectedChoices": 1
    },
    {
     "type": "checkbox",
     "name": "question24",
     "title": "У вас есть следующие общие жалобы? Отметьте которые есть ",
     "choices": [
      {
       "value": "item1",
       "text": "Усталость"
      },
      {
       "value": "item2",
       "text": "Быстрая Утомляемость"
      },
      {
       "value": "item3",
       "text": "Потеря веса"
      },
      {
       "value": "item4",
       "text": "Набор веса"
      },
      {
       "value": "item5",
       "text": "  Потеря аппетита"
      },
      {
       "value": "item6",
       "text": "Повышенная Температура > 37.0С"
      },
      {
       "value": "item7",
       "text": "Озноб"
      },
      {
       "value": "item8",
       "text": "Ночные потения"
      }
     ],
     "hasOther": true,
     "hasNone": true,
     "noneText": "Нет ",
     "otherText": "Другие (опишите) ",
     "maxSelectedChoices": 8
    }
   ],
   "title": "Базовый опросник",
   "description": "Первые 10 вопросов"
  }
 ]
}`
	c.JSON(http.StatusOK, data)
}
