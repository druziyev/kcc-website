from django.shortcuts import render
from django.views.generic import View


class IndexView(View):

    def get(self, request):
        data = {
            "page_title": "KIMEP Case Club | KCC",
            "welcome_title": "KIMEP CASE CLUB",
            "welcome_subtitle": "We are - Family",
            "welcome_description": "Student organization positioned on solving business cases",
        }

        return render(request, 'main/index.html', data)
