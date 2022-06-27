from django.contrib import admin
from .models import Question


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question', "reponse1", "reponse2", "reponse3", "reponse4", "bonne_reponse")
    ordering = ("pk",)



