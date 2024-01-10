// A
class WeatherEvent {
    private timeStamp : Date;
    constructor (timeStamp : string) {
        this.timeStamp = new Date(timeStamp);
    } // constructor    
    protected getInformation = () : string => {
        //return this.timeStamp.toLocaleString();
        return "";
    } // getInformation

    public print = () : void => {
        console.log(`${this.timeStamp} ${this.getInformation()}`);
    } // print
} // WeatherEvent

// B

class TemperatureChangeEvent extends WeatherEvent {
    private temperature : number;
    constructor (timeStamp : string, temperature : number) {
        super (timeStamp);
        this.temperature = temperature;
    } // constructor
    public getInformation = () : string => {
        return `temperature: ${this.temperature} °C`;
    } // getInformation
} // TemperatureChangeEvent

// C

class HumidityChangeEvent extends WeatherEvent {
    private humidity : number;
    constructor (timeStamp : string, humidity : number) {
        super (timeStamp);
        this.humidity = humidity;
    } // constructor
    public getInformation = () : string => {
        return `humidity: ${this.humidity} %`;
    } // getInformation
} // HumidityChangeEvent

// D

class WindStrengthChangeEvent extends WeatherEvent {
    private windStrength : number;
    constructor (timeStamp : string, windStrength : number) {
        super (timeStamp);
        this.windStrength = windStrength;
    } // constructor
    public getInformation = () : string => {
        return `wind strength: ${this.windStrength} m/s`;
    } // getInformation
} // WindStrengthChangeEvent

// E

const weatherEvents : Array<TemperatureChangeEvent | HumidityChangeEvent | WindStrengthChangeEvent> = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));

weatherEvents.forEach(weatherEvent => weatherEvent.print());
// Should print:
// 2022-11-29 03:00 temperature: -6.4°C
// 2022-11-29 04:00 humidity: 95%
// 2022-11-30 13:00 wind strength: 2.2 m/s