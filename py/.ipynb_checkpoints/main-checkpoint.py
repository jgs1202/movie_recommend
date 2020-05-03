# -*- coding: utf-8 -*-
from recommend import Recommend


if __name__ == '__main__':
    sentence = '夏、海沿いの静かな町。幸せな夏休みを送るはずだった瑞穂の親友が殺された。瑞穂は密室の謎に叔父である弁護士とともに挑む。その犯人とは。'
    session = Recommend(sentence)
    session.get_movie_data()
    session.calc_similarity()
