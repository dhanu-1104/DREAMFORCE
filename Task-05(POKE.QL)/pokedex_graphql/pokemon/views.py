# views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from strawberry.django.views import GraphQLView
from .schema import schema

@require_POST
@csrf_exempt
def graphql(request):
    response = GraphQLView.as_view(schema=schema)(request)
    response_data = JsonResponse(response.data)
    response_data['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response_data['Access-Control-Allow-Methods'] = 'POST'
    response_data['Access-Control-Allow-Headers'] = 'content-type'
    return response_data
