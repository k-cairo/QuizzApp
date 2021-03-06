from django.shortcuts import render, redirect
from .models import Question


def home(request):
    return redirect("quizz-question", num=1)


def question(request, num):
    questions = Question.objects.all()
    target_question = questions[num - 1]
    next_num = num + 1

    if not next_num > len(questions) + 1:
        return render(request, "quizz/index.html", context={"question": target_question,
                                                            "num": num,
                                                            "next_num": next_num,
                                                            "total_questions": len(questions) + 1,
                                                            "reel_total_question": len(questions)})


def resultat(request):
    questions = Question.objects.all()
    next_num = len(questions) + 2
    return render(request, "quizz/resultat.html", context={"next_num": next_num,
                                                           "total_questions": len(questions) + 1,
                                                           "reel_total_question": len(questions)})