export default class Weather {
    WeatherType = [
        { id: 0, name: 'EXTRASUNNY' },
        { id: 1, name: 'CLEAR' },
        { id: 2, name: 'CLOUDS' },
        { id: 3, name: 'SMOG' },
        { id: 4, name: 'FOGGY' },
        { id: 5, name: 'OVERCAST' },
        { id: 6, name: 'RAIN' },
        { id: 7, name: 'THUNDER' },
        { id: 8, name: 'CLEARING' },
        { id: 9, name: 'NEUTRAL' },
        { id: 10, name: 'SNOW' },
        { id: 11, name: 'BLIZZARD' },
        { id: 12, name: 'SNOWLIGHT' },
        { id: 13, name: 'XMAS' },
        { id: 14, name: 'HALLOWEEN' },
    ];

    /**
     * @param id: number
     *
     * @return string
     *
     */
    getWeatherById(id) {
        for (let weatherEntry in WeatherType) {
            if (weatherEntry.id === id) {
                return weatherEntry.name;
            }
        }
        return undefined;
    }

    getTemerature(courrentWeather, courrentTemperature) {
        //Wenn das Wetter regnet und die temeratur unter 0 ist -> Winter
        /*
            5 / 6 = 10
            6 = 11
            7 = 12
            wenn es länger als x Stunden > 0°C ist, dann wetter = 13
        */
    }

    now() {
        let date = new Date();
        let h = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        return {
            h: h,
            min: min,
            sec: sec,
        };
    }

    //generiert das nächste wetter
    next(courent_weather) {
        let factor = Math.round(Math.random() * 100);
        //console.log(factor);

        if (courent_weather == 0) {
            if (factor <= 40) {
                return 0;
            } else if (factor >= 41 && factor <= 60) {
                return 1;
            } else if (factor >= 61 && factor <= 70) {
                return 2;
            } else if (factor >= 71 && factor <= 90) {
                return 3;
            } else if (factor >= 91 && factor <= 95) {
                return 4;
            } else if (factor >= 96 && factor <= 100) {
                return 5;
            }
        } else if (courent_weather == 1) {
            if (factor <= 20) {
                return 0;
            } else if (factor >= 21 && factor <= 50) {
                return 1;
            } else if (factor >= 51 && factor <= 80) {
                return 2;
            } else if (factor >= 81 && factor <= 90) {
                return 3;
            } else if (factor >= 91 && factor <= 95) {
                return 4;
            } else if (factor >= 96 && factor <= 100) {
                return 5;
            }
        } else if (courent_weather == 2) {
            if (factor <= 10) {
                return 0;
            } else if (factor >= 11 && factor <= 40) {
                return 1;
            } else if (factor >= 41 && factor <= 50) {
                return 2;
            } else if (factor >= 51 && factor <= 60) {
                return 3;
            } else if (factor >= 61 && factor <= 70) {
                return 4;
            } else if (factor >= 71 && factor <= 90) {
                return 5;
            } else if (factor >= 91 && factor <= 100) {
                return 6;
            }
        } else if (courent_weather == 3) {
            if (factor <= 20) {
                return 0;
            } else if (factor >= 21 && factor <= 30) {
                return 1;
            } else if (factor >= 31 && factor <= 40) {
                return 2;
            } else if (factor >= 41 && factor <= 50) {
                return 3;
            } else if (factor >= 51 && factor <= 70) {
                return 4;
            } else if (factor >= 71 && factor <= 85) {
                return 5;
            } else if (factor >= 86 && factor <= 95) {
                return 6;
            } else if (factor >= 96 && factor <= 100) {
                return 7;
            }
        } else if (courent_weather == 4) {
            if (factor <= 5) {
                return 0;
            } else if (factor >= 6 && factor <= 10) {
                return 1;
            } else if (factor >= 11 && factor <= 20) {
                return 2;
            } else if (factor >= 21 && factor <= 40) {
                return 3;
            } else if (factor >= 41 && factor <= 70) {
                return 4;
            } else if (factor >= 71 && factor <= 75) {
                return 5;
            } else if (factor >= 76 && factor <= 85) {
                return 6;
            } else if (factor >= 86 && factor <= 90) {
                return 7;
            } else if (factor >= 91 && factor <= 100) {
                return 8;
            }
        } else if (courent_weather == 5) {
            if (factor <= 5) {
                return 0;
            } else if (factor >= 6 && factor <= 10) {
                return 1;
            } else if (factor >= 11 && factor <= 30) {
                return 2;
            } else if (factor >= 31 && factor <= 45) {
                return 3;
            } else if (factor >= 46 && factor <= 50) {
                return 4;
            } else if (factor >= 51 && factor <= 75) {
                return 5;
            } else if (factor >= 76 && factor <= 90) {
                return 6;
            } else if (factor >= 91 && factor <= 100) {
                return 7;
            } else if (factor >= 91 && factor <= 100) {
                return 8;
            }
        } else if (courent_weather == 6) {
            if (factor <= 10) {
                return 2;
            } else if (factor >= 11 && factor <= 20) {
                return 3;
            } else if (factor >= 21 && factor <= 30) {
                return 4;
            } else if (factor >= 31 && factor <= 45) {
                return 5;
            } else if (factor >= 46 && factor <= 65) {
                return 6;
            } else if (factor >= 66 && factor <= 75) {
                return 7;
            } else if (factor >= 76 && factor <= 100) {
                return 8;
            }
        } else if (courent_weather == 7) {
            if (factor <= 5) {
                return 3;
            } else if (factor >= 6 && factor <= 10) {
                return 4;
            } else if (factor >= 11 && factor <= 20) {
                return 5;
            } else if (factor >= 21 && factor <= 30) {
                return 6;
            } else if (factor >= 31 && factor <= 50) {
                return 7;
            } else if (factor >= 51 && factor <= 100) {
                return 8;
            }
        } else if (courent_weather == 8) {
            if (factor <= 10) {
                return 1;
            } else if (factor >= 11 && factor <= 50) {
                return 2;
            } else if (factor >= 51 && factor <= 80) {
                return 5;
            } else if (factor >= 81 && factor <= 85) {
                return 6;
            } else if (factor >= 86 && factor <= 90) {
                return 7;
            } else if (factor >= 91 && factor <= 100) {
                return 8;
            }
        } else if (courent_weather == 13) {
            return 13;
        }
    }
}
