/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		// CommonJS
		factory(exports, require('echarts'));
	} else {
		// Browser globals
		factory({}, root.echarts);
	}
}(this, function (exports, echarts) {
	var log = function (msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	}
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	if (!echarts.registerMap) {
		log('ECharts Map is not loaded')
		return;
	}
	echarts.registerMap('xuzhou',{
			"type": "FeatureCollection",
			"features": [
				{
					"type": "Feature",
					"properties": {'name': '区1'},
					"geometry": {
						"type": "Polygon",
						"coordinates": [
							[
								[
									117.18809366226198,
									34.23866340964052
								],
								[
									117.18787908554076,
									34.235771889794066
								],
								[
									117.18805074691774,
									34.23493812022694
								],
								[
									117.18888759613036,
									34.23431722263252
								],
								[
									117.1877932548523,
									34.2327915690966
								],
								[
									117.19335079193115,
									34.23142555352218
								],
								[
									117.1956467628479,
									34.23208195338215
								],
								[
									117.19390869140625,
									34.23853923598243
								],
								[
									117.1932005882263,
									34.23852149687347
								],
								[
									117.18946695327759,
									34.238078017934576
								],
								[
									117.18809366226198,
									34.23866340964052
								]
							]
						]
					}
				},
				{
					"type": "Feature",
					"properties": {'name': '区2'},
					"geometry": {
						"type": "Polygon",
						"coordinates": [
							[
								[
									117.19249248504639,
									34.23069818553895
								],
								[
									117.19268560409547,
									34.22901279655597
								],
								[
									117.19523906707764,
									34.22924343072462
								],
								[
									117.19684839248657,
									34.22942084119377
								],
								[
									117.1972346305847,
									34.22970469716706
								],
								[
									117.19654798507689,
									34.23037885126905
								],
								[
									117.19654798507689,
									34.23075140779955
								],
								[
									117.19553947448729,
									34.23075140779955
								],
								[
									117.19547510147095,
									34.23139007230292
								],
								[
									117.19247102737425,
									34.230893333663346
								],
								[
									117.19249248504639,
									34.23069818553895
								]
							]
						]
					}
				},
				{
					"type": "Feature",
					"properties": {'name': '区3'},
					"geometry": {
						"type": "Polygon",
						"coordinates": [
							[
								[
									117.19596862792969,
									34.23220613656386
								],
								[
									117.19661235809326,
									34.2316029593943
								],
								[
									117.20165491104125,
									34.232188396120534
								],
								[
									117.20077514648436,
									34.23515099834814
								],
								[
									117.20021724700929,
									34.23600250545067
								],
								[
									117.1997880935669,
									34.23701365894981
								],
								[
									117.19961643218994,
									34.23798932186646
								],
								[
									117.19472408294676,
									34.236871743401835
								],
								[
									117.19596862792969,
									34.23220613656386
								]
							]
						]
					}
				},
				{
					"type": "Feature",
					"properties": {'name': '区4'},
					"geometry": {
						"type": "Polygon",
						"coordinates": [
							[
								[
									117.19734191894531,
									34.22970469716706
								],
								[
									117.198007106781,
									34.22878216175571
								],
								[
									117.1977925300598,
									34.22443546471096
								],
								[
									117.20193386077881,
									34.224382238458965
								],
								[
									117.20232009887695,
									34.230911074379485
								],
								[
									117.20058202743532,
									34.23096429650553
								],
								[
									117.19811439514159,
									34.23037885126905
								],
								[
									117.19734191894531,
									34.22970469716706
								]
							]
						]
					}
				}
			]
		}
	)
}));

