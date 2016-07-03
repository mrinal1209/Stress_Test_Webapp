from django.db import models


# This Python class Represent Question Table
class Question(models.Model):
    question = models.TextField(max_length=200,)

    class Meta:
        ordering = ['pk']

    def get_as_dict(self):
        return {
            "questiontext": self.question
        }

    def __str__(self):
        return self.question


class Option(models.Model):
    option = models.CharField(max_length=100)
    weightage = models.IntegerField(
        help_text="Weightage should be a number."
    )

    class Meta:
        ordering = ['weightage']

    def get_as_dict(self):
        return {
            "optiontext": self.option,
            "id_val": str(self.weightage)+'_radio',
            "weightage": self.weightage
        }

    def __str__(self):
        return self.option+' ('+str(self.weightage)+')'


class Suggestion(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    suggestion = models.CharField(max_length=400)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['timestamp']

    def __str__(self):
        return self.suggestion
