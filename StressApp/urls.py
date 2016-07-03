from django.conf.urls import url
from StressApp import views

# All Urls Of The App

urlpatterns = [
    url(r'^$', views.home, name='home'),  # regex to detect homepage
    url(r'^test', views.start_survey, name='start_survey'),
    url(r'^questions$', views.get_all_questions, name='get_all_questions'),
    url(r'^options', views.get_all_options, name='get_all_options'),
    #url(r'^questions$', views.get_all_questions, name='get_all_questions'),
]
