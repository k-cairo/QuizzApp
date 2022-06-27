from django.shortcuts import render
from .models import Question


def question(request, num):
    questions = Question.objects.all()
    target_question = questions[num - 1]
    next_num = num + 1

    if not next_num > len(questions) + 1:
        return render(request, "quizz/index.html", context={"question": target_question,
                                                            "num": num,
                                                            "next_num": next_num,
                                                            "total_questions": len(questions) + 1})


def resultat(request):
    questions = Question.objects.all()
    next_num = len(questions) + 2
    return render(request, "quizz/resultat.html", context={"next_num": next_num,
                                                           "total_questions": len(questions) + 1})