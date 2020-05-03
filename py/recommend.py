# -*- coding: utf-8 -*-

import gensim
import MeCab
import numpy as np
from scipy import spatial
from sqlite3 import connect, Row
import sys
from statistics import mean
from operator import itemgetter

sys.path.append('../')
from flaski.app import Movie_Data


class Recommend:
    def __init__(self, input_sentence):
        self.input_sentence = input_sentence
        self.movie_data = []
        self.similarities = []
        print('loading trained model...')
        self.word2vec_model = gensim.models.KeyedVectors.load_word2vec_format('model.vec', binary=False)
        print('loaded')
        self.mecab = MeCab.Tagger("/usr/local/lib/mecab/dic/mecab-ipadic-neologd")

    def avg_feature_vector(self, sentence, model, num_features):
        words = self.mecab.parse(sentence).replace(' \n', '').split()  # mecabの分かち書きでは最後に改行(\n)が出力されてしまうため、除去
        words = [words[i] for i in range(len(words)) if i % 2 == 0]
        feature_vec = np.zeros((num_features,), dtype="float32")  # 特徴ベクトルの入れ物を初期化
        exceptions = 0
        for word in words:
            try:
                feature_vec = np.add(feature_vec, model[word])
            except:
                exceptions += 1
        if len(words) - exceptions > 0:
            feature_vec = np.divide(feature_vec, len(word) - exceptions)
        return feature_vec

    def mecab_similarity(self, sentence_1, sentence_2):
        num_features = 300
        sentence_1_avg_vector = self.avg_feature_vector(sentence_1, self.word2vec_model, num_features)
        sentence_2_avg_vector = self.avg_feature_vector(sentence_2, self.word2vec_model, num_features)
        # １からベクトル間の距離を引いてあげることで、コサイン類似度を計算
        return 1 - spatial.distance.cosine(sentence_1_avg_vector, sentence_2_avg_vector)

    def get_movie_data(self):
        from sqlalchemy import create_engine, Column, String, Integer
        from sqlalchemy.ext.declarative import declarative_base
        from sqlalchemy.orm import sessionmaker
        engine = create_engine('sqlite:///../flaski/amazon_prime_movies.db')
        SessionMaker = sessionmaker(bind=engine)  # Pythonとデータベースの経路です
        session = SessionMaker()
        self.movie_data = session.query(Movie_Data).all()

    def calc_similarity(self):
        _similarities = [{"index":i, "value":0} for i in range(len(self.movie_data))]

        splited_input = self.input_sentence.split('。')
        for movie_num, movie_datum in enumerate(self.movie_data):
            _similarities_per_movie = []
            splited_target = movie_datum.abstract.split('。')
            for i in range(len(splited_input)):
                try:
                    _similarities_per_movie.append(self.mecab_similarity(splited_input[i], splited_target[i]))
                except:
                    pass
            _similarities[movie_num]['value'] = mean(_similarities_per_movie)
        sorted(_similarities, key=itemgetter('value'), reverse=True)
        self.similarities = _similarities[:10]










