from django.http import HttpResponse
from django.shortcuts import render
from StressApp.models import Question, Option, Suggestion

import json


# handles home page
def home(request):
    return render(request, 'StressApp/firstpage.html')


def start_survey(request):
    options = Option.objects.all()
    context = {
        'options': options
    }
    return render(request, 'StressApp/secondpage.html', context)


# return all questions from database in json format
def get_all_questions(request):
    que_obj = Question.objects.all()  # Fetch all questions from database
    questions = [que.get_as_dict() for que in que_obj]

    return HttpResponse(
                json.dumps(questions),
                content_type='application/json'
    )


def get_all_options(request):
    opt_obj = Option.objects.all()  # Fetch all questions from database
    options = [opt.get_as_dict() for opt in opt_obj]

    return HttpResponse(
                json.dumps(options),
                content_type='application/json'
    )
