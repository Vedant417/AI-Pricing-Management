from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

from selenium.webdriver.common.by import By

import re
import time


def fetch_imdb_pro_data(imdb_id):

    print("FUNCTION STARTED")

    options = webdriver.ChromeOptions()

    # RUN IN BACKGROUND
    options.add_argument("--headless=new")

    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")

    # OPTIONAL PERFORMANCE FLAGS
    options.add_argument("--window-size=1920,1080")
    options.add_argument("--disable-dev-shm-usage")

    print("CREATING DRIVER")

    print("DRIVER CREATED")

    driver = webdriver.Chrome(
        service=Service(
            ChromeDriverManager().install()
        ),
        options=options
    )

    try:

        # USE BOXOFFICEMOJO INSTEAD
        url = f"https://www.boxofficemojo.com/title/{imdb_id}/"

        print("OPENING BOXOFFICEMOJO =", url)

        driver.get(url)

        time.sleep(5)

        page_text = driver.find_element(
            By.TAG_NAME,
            "body"
        ).text

        print(page_text[:5000])

        worldwide_gross = 0

        # THIS REGEX WORKS FOR BOXOFFICEMOJO
        gross_match = re.search(
            r'Worldwide\s+\$([\d,\,]+)',
            page_text,
            re.IGNORECASE
        )

        if gross_match:

            worldwide_gross = int(
                gross_match.group(1).replace(",", "")
            )

        print("WORLDWIDE GROSS =", worldwide_gross)

        # SIMPLE MOVIEMETER PLACEHOLDER
        moviemeter = 500

        return {

            "worldwide_gross": worldwide_gross,

            "moviemeter": moviemeter
        }

    except Exception as e:

        print("BOXOFFICEMOJO ERROR =", e)

        return {

            "worldwide_gross": 0,

            "moviemeter": 100000
        }

    finally:

        driver.quit()