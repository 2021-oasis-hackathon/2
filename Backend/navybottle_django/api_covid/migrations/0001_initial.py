# Generated by Django 3.2.6 on 2021-08-17 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CovidData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=128)),
                ('update_date', models.CharField(max_length=128)),
                ('confirmed_patient', models.CharField(max_length=128)),
                ('confirmed_increase', models.CharField(max_length=128)),
                ('quarantine', models.CharField(max_length=128)),
                ('dead', models.CharField(max_length=128)),
                ('quarantine_increase', models.CharField(max_length=128)),
                ('dead_increase', models.CharField(max_length=128)),
            ],
            options={
                'db_table': 'CovidData',
            },
        ),
    ]
