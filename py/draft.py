# -*- coding: utf-8 -*-

import math
import sys
import random
from operator import itemgetter
sys.path.append('../')
from flaski.app import introductions


class Draft:
    def __init__(self):
        self.input_sentence = ''
        self.draft_data = [[], [], [], []]

    def get_draft_data(self):
        from sqlalchemy import create_engine, Column, String, Integer
        from sqlalchemy.ext.declarative import declarative_base
        from sqlalchemy.orm import sessionmaker
        engine = create_engine('sqlite:///flaski/amazon_prime_movies.db')
        SessionMaker = sessionmaker(bind=engine)  # Pythonとデータベースの経路です
        session = SessionMaker()
        raw_draft_data = session.query(introductions).all()

        for datum in raw_draft_data:
            try:
                order = datum.order
                dic = {"id": len(self.draft_data[order - 1]), "sentence": datum.sentence, "rand": random.random()}
                self.draft_data[order - 1].append(dic)
            except:
                pass
        for i in range(len(self.draft_data)):
            self.draft_data[i] = sorted(self.draft_data[i], key=itemgetter('rand'))

    def pick_up_four(self):
        data = [[], [], [], []]
        for i in range(len(data)):
            data[i] = self.draft_data[i][:4]
        return data


if __name__ == '__main__':
    draft = Draft()
    draft.get_draft_data()
