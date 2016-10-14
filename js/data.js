function Data(){
	var data = {
	    "content": {
	        "search_condition": {
	            "date": "2016-07-27",
	            "hour": "14",
	            "source": "OverAll"
	        },
	        "tabledata": {
	            "overall_requests": 1000,
	            "whitelist": 500,
	            "succeed_requests": 400,
	            "data": [
	                {
	                    "site_url": "www.google.com",
	                    "errornum": 100,
	                    "errortype": {
	                        "img": 33,
	                        "title": 50,
	                        "text": 17
	                    }
	                },
	                {
	                    "site_url": "www.twitter.com",
	                    "errornum": 130,
	                    "errortype": {
	                        "img": 33,
	                        "title": 50,
	                        "text": 17,
	                        "other": 30
	                    }
	                },
	                {
	                    "site_url": "www.baidu.com",
	                    "errornum": 200,
	                    "errortype": {
	                        "img": 33,
	                        "title": 50,
	                        "text": 17,
	                        "other": 50,
	                        "special": 50
	                    }
	                }
	            ]
	        },
	        "imgdata": {
	            "date": {
	                "pass": 3,
	                "fail": 2,
	                "notinWL": 1
	            },
	            "date1": {
	                "pass": 4,
	                "fail": 2,
	                "notinWL": 3
	            }
	        }
	    },
	    "navList": {
	        "date1": {
	            "hour1": [
	                "source1",
	                "source2"
	            ],
	            "hour2": [
	                "source3",
	                "source4"
	            ]
	        },
	        "date2": {
	            "hour1": [
	                "source1",
	                "source2"
	            ],
	            "hour2": [
	                "source3",
	                "source4"
	            ]
	        }
	    }
	};
	return data;
}