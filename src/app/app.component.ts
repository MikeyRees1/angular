import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Items, Station, Measures } from './station';
import { RootObject } from './values';
import { stnDict } from './stnDict';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent implements OnInit  {

  readonly ROOT_URL = 'https://environment.data.gov.uk/flood-monitoring/id/stations/';
  result: any;
  stationData2: Items[] | undefined;
  stn: Measures | undefined;
  period: number | undefined;


  constructor(private http: HttpClient) {}

  stationData: Station | undefined;
  stnItems = [];
  stationLabels = [];
  list: string[] = [];
  value: number | undefined;
  stnDict: stnDict = {};
  stnArray: [{ Station: string; StnRef: string; StnMeasure: string }] =[{Station:"Station", StnRef:"Station Reference", StnMeasure:"Measure"}]
  stnName = "Station Name";
  idName = "";
  stnMeasure = "";
  displayedMeasure = "";

  ngOnInit(){
    this.getAllStations()
  }

  public getPosts(): Observable<Station> {


    return this.http.get<Station>(this.ROOT_URL + this.idName

    )

  }

  getStationData(){
        //update idname with the relevant idname for a station name
    return this.getPosts().subscribe(Response=>{

      this.stationData = Response
      this.value = Response.items.measures.latestReading.value
      this.displayedMeasure = this.stnMeasure
      this.stnName = Response.items.label

    })}

  getAllStations(){
    return this.http.get<RootObject>("https://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge"
      //   // + '?station=1029TH'

    ).subscribe(Response=>{

      Response.items.forEach(element => {
          this.list.push(element.label);
          this.list.push(element.stationReference)
          this.list.push(element.measures[0].unitName)
      }

      );

    })
  }

  toDict(){

    for (let i = 0; i < this.list.length; i+=3) {
      this.stnDict[this.list[i]] = this.list[i+1], this.list[i+2];
    }

    for (let i = 0; i < this.list.length; i+=3) {
      this.stnArray.push({Station:this.list[i], StnRef:this.list[i+1], StnMeasure:this.list[i+2]});
    }

  }

  updateStationRef(i:number){
    this.idName = this.stnArray[i].StnRef
    this.stnName = this.stnArray[i].Station
    this.stnMeasure = this.stnArray[i].StnMeasure
    this.getStationData()
  }


  }



