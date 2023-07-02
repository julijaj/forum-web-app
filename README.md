This is a starter template for [Learn Next.js](https://nextjs.org/learn).target="_blank"
Baigiamasis projektas
Baigiamoji uzduotis
Šio projekto metu reikės sukurti internetinį forumą naudojant React, NodeJS Express ir MongoDB arba MySQL. Forumo tikslas - leisti užduoti klausimus, į juos atsakinėti ir žymėti patinkančius arba nepatinkančius atsakymus. Galite įsivaizduoti kažką panašaus į https://stackoverflow.com/questions, tik jums rekės padaryt supaprastintą versiją.
Funkcionalumas:
- Registruotis
- Prisijungti
- Užduoti naują klausimą (tik prisijungus)
- Ištrinti klausimą (tik prisiijungus)
- Atsakyti į užduotą klausimą (tik prisijungus)
- Ištrinti atsakymą (tik prisijungus)
- Žymėti/atžymėti patinkačius ir nepatinkančius atsakymus (like/dislike) (tik prisijungus) 
- Peržiūrėti klausimų sąrašą.
- Filtruoti atsakytus arba neatsakytus klausimus
- Peržiūrėti klausimų atsakymus
Forumo projektas sudeda iš frontend'o ir backend'o dalių:
Backend'e naudosime NodeJS Express, MongoDB arba MySQL ir kelis papildomus npm paketus, kuries palengvins darbą. Būtina susikurti ir susikonfigūruoti  `dotenv`, o toliau Jūsų laisvė rinktis.
Frontend'e naudosime React. Kaip ir backend'e galima naudoti papildomjus npm paketus.
### Backend'as
POST /register
POST /login
GET /questions
POST /question
DELETE /question/:id
GET /question/:id/answers
POST /question/:id/answers
DELETE /answer/:id

### Frontend'as
Frontend'as neturi nustatyto dizaino , kurį reikia atkartoti. Tačiau jum tenka sunkesnė užduotis - patiems sugalvoti ir sukurti puslapio dizainą. Svarbiausia išpildyti visus funkcinius reikalavimus ir validuoti vartotojo įvedamus duomenis.
Užduoties įkėlimo instrukcijos
1. Sukurti GitHub repozitoriją.
2.!!!!!!!!!!!  Kiekvienos paskaitos metu ar darant užuoti koda pushint bent 2 kartus per paskaita.  !!!!!!!!!!!
3. Galutine kodo versija pasidalinti su dėstytoju.

Sėkmės!





    user: email, password, name, asked_questions_ids, id
​
    question: question_text, id, answers_id
​
    answer: id, answer_text, gained_likes_number
