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


def get_all_questions(request):
    return get_all_objects_in_json(request, Question)


def get_all_options(request):
    return get_all_objects_in_json(request, Option)


def get_all_objects_in_json(request, model):
    """
    This View Abstract Common Functionality Of Returning
    All Objects Of A Model In JSON Format.

    :param request: takes a request
    :param model:   anything that inherits Model class
    :return:        return all objects in json format
    """
    obj = model.objects.all()  # Fetch all objects
    json_obj = [i.get_as_dict() for i in obj]

    return HttpResponse(
        json.dumps(json_obj),
        content_type='application/json'
    )

