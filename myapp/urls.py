from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Home page
    path('select-course/', views.select_course, name='select_course'),  # Select Course page
    path('project-creation/', views.project_creation, name='project_creation'),  # Project Creation page
    path('available-faculty/', views.available_faculty, name='available_faculty'),  # Available Faculty page
    path('jobs-internships/', views.jobs_internships, name='jobs_internships'),  # Jobs and Internships page
    path('profile/', views.profile, name='profile'),  # Profile page
]