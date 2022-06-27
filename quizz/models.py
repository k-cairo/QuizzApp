from django.db import models


class Question(models.Model):
    question = models.CharField(max_length=300)
    reponse1 = models.CharField(max_length=300)
    reponse2 = models.CharField(max_length=300)
    reponse3 = models.CharField(max_length=300)
    reponse4 = models.CharField(max_length=300)
    bonne_reponse = models.CharField(max_length=300)

    def __str__(self):
        return self.question