# from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.firefox.options import Options
# import requests
# import time
# from selenium import webdriver
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys


# def scroll_to_bottom(driver):
#     SCROLL_PAUSE_TIME = 0.5
#     last_height = driver.execute_script("return document.body.scrollHeight")
#     while True:
#         driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
#         time.sleep(SCROLL_PAUSE_TIME)
#         new_height = driver.execute_script("return document.body.scrollHeight")
#         if new_height == last_height:
#             break
#         last_height = new_height


# def access_amazon():
#     # URL = "https://www.amazon.co.jp/gp/video/search/ref=atv_mv_hom_1_c_4dee9j_4_smr?queryToken=eyJ0eXBlIjoicXVlcnkiLCJuYXYiOnRydWUsInBpIjoiZGVmYXVsdCIsInNlYyI6ImNlbnRlciIsInN0eXBlIjoic2VhcmNoIiwicXJ5Ijoibm9kZT0yMzUxNjQ5MDUxLDU4Nzg4NDgwNTEmZmllbGQtd2F5c190b193YXRjaD0zNzQ2MzMwMDUxJnBfbl9lbnRpdHlfdHlwZT00MTc0MDk4MDUxJmFkdWx0LXByb2R1Y3Q9MCZicT0obm90IChvciBnZW5yZTonYXZfZ2VucmVfYW5pbWUnIGdlbnJlOidqYXBhbmVzZV9tb3ZpZXNfLV9zcGVjaWFsX2VmZmVjdCcgZ2VucmU6J2F2X2dlbnJlX2Vyb3RpYycpKSZiYm49MjM1MTY1MDA1MSZzZWFyY2gtYWxpYXM9aW5zdGFudC12aWRlbyZmaWVsZC1mZWF0dXJlX3NpeF9icm93c2UtYmluPTU4NzE0NzIwNTEmcXMtYXZfcmVxdWVzdF90eXBlPTQmcXMtaXMtcHJpbWUtY3VzdG9tZXI9MiIsInJ0IjoiNERFRTlqc21yIiwidHh0IjoiUHJpbWUgVmlkZW8iLCJzdWJ0eHQiOiLml6XmnKzmmKDnlLsiLCJvZmZzZXQiOjAsIm5wc2kiOjAsIm9yZXEiOiI3NzcwZmVlNy1mYmEzLTQzYWYtYmQ0Yy05YTJjNWY3YjJkMTk6MTU4ODM5MTA3NjAwMCIsInN0cmlkIjoiMToxMTNMMEdOWkVFTUdSOCMjTVpRV0daTFVNVlNFR1lMU041MlhHWkxNIn0%3D&pageId=default&queryPageType=browse&ie=UTF8"
#     # URL = 'https://www.amazon.co.jp/gp/video/search/ref=atv_sr_filter_p_n_theme_browse-bin?ie=UTF8&pageId=default&queryToken=eyJ0eXBlIjoiZmlsdGVyIiwibmF2Ijp0cnVlLCJzZWMiOiJjZW50ZXIiLCJzdHlwZSI6InNlYXJjaCIsInFyeSI6Im5vZGU9MjM1MTY0OTA1MSw1ODc4ODQ4MDUxJmJxPShub3QgKG9yIGdlbnJlOidhdl9nZW5yZV9hbmltZScgZ2VucmU6J2phcGFuZXNlX21vdmllc18tX3NwZWNpYWxfZWZmZWN0JyBnZW5yZTonYXZfZ2VucmVfZXJvdGljJykpJmZpZWxkLXdheXNfdG9fd2F0Y2g9Mzc0NjMzMDA1MSZwX25fZW50aXR5X3R5cGU9NDE3NDA5ODA1MSZiYm49MjM1MTY1MDA1MSZzZWFyY2gtYWxpYXM9aW5zdGFudC12aWRlbyZmaWVsZC1mZWF0dXJlX3NpeF9icm93c2UtYmluPTU4NzE0NzIwNTEmcF9uX3RoZW1lX2Jyb3dzZS1iaW49NDQzNTU1MjA1MSIsInR4dCI6IiIsInN1YnR4dCI6IiIsImZpbHRlciI6e30sIm9mZnNldCI6MCwibnBzaSI6MCwib3JlcSI6ImJjZTFjYjBmLTBlNjQtNGE2MS05MWQyLTY5ZDdmZDQzYjcxYjoxNTg4Mzk2NzExMDAwIiwic3RLZXkiOiJ7XCJzYnNpblwiOjAsXCJjdXJzaXplXCI6MCxcInByZXNpemVcIjowfSJ9&queryPageType=browse&phrase'
#     URL = 'https://www.amazon.co.jp/gp/video/search/ref=atv_hm_hom_1_c_X6SNuX_10_1?queryToken=eyJ0eXBlIjoicXVlcnkiLCJuYXYiOnRydWUsInBpIjoiZGVmYXVsdCIsInNlYyI6ImNlbnRlciIsInN0eXBlIjoic2VhcmNoIiwicXJ5Ijoibm9kZT0yMzUxNjQ5MDUxLCEyMzUxNjUwMDUxLDI0Nzg0NjUwNTEmc2VhcmNoLWFsaWFzPWluc3RhbnQtdmlkZW8mZmllbGQtd2F5c190b193YXRjaD0zNzQ2MzMwMDUxJmZpZWxkLWVudGl0eV90eXBlPTQxNzQwOTgwNTEmYmJuPTIzNTE2NTAwNTEiLCJ0eHQiOiIiLCJvZmZzZXQiOjAsIm5wc2kiOjAsIm9yZXEiOiIzZjc5ZjRmMC0xNWFiLTRjNDYtODliZi1iNWUyYWE3N2RkZTU6MTU4ODcyOTY0NzAwMCJ9&pageId=default&queryPageType=browse&ie=UTF8'

#     # Selenium用オプション
#     op = Options()
#     op.add_argument("--disable-gpu")
#     op.add_argument("--disable-extensions")
#     op.add_argument("--proxy-server='direct://'")
#     op.add_argument("--proxy-bypass-list=*")
#     op.add_argument("--start-maximized")
#     op.add_argument("--headless")
#     driver = webdriver.Firefox(executable_path='/Users/Nozomi/System/geckodriver')

#     # ページアクセス
#     driver.get(URL)
#     scroll_to_bottom(driver)

#     soup = BeautifulSoup(driver.page_source, features="html.parser")

#     raw_titles = soup.select("h1")
#     titles = [title.text for title in raw_titles]
#     print(titles)


# if __name__ == '__main__':
#     # access_amazon()
#     access_amazon()
