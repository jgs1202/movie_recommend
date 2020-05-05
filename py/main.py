# -*- coding: utf-8 -*-
from .recommend import Recommend
from .draft import Draft


def pick_up(session, sentence):
    session.calc_similarity(sentence)
    for similarity in session.similarities:
        print(similarity['value'])
    results = [session.movie_data[similarity['index']] for similarity in session.similarities]
    output = {"data": []}
    for result in results:
        dic = {}
        dic['title'] = result.title
        dic['url'] = result.url
        dic['img_src'] = result.img_src
        dic['abstract'] = result.abstract
        output['data'].append(dic)
    return output


def responce_draft(hero, friend_a, friend_b):
    session = Draft()
    session.get_draft_data()
    data = session.pick_up_four()
    for i in range(len(data)):
        for j in range(len(data[i])):
            data[i][j]['sentence'] = data[i][j]['sentence'].replace('主人公', hero)
            data[i][j]['sentence'] = data[i][j]['sentence'].replace('友人A', friend_a)
            data[i][j]['sentence'] = data[i][j]['sentence'].replace('友人B', friend_b)
    return {"data": data}


if __name__ == '__main__':
    # sentence = '夏、海沿いの静かな町。幸せな夏休みを送るはずだった瑞穂の親友が殺された。瑞穂は密室の謎に叔父である弁護士とともに挑む。その犯人とは。'
    # session = Recommend(sentence)
    # session.get_movie_data()
    # session.calc_similarity()
    # result = [session.movie_data[similarity['index']] for similarity in session.similarities]
    responce_draft('a', 'b', 'c')
