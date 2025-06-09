var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.973648613744059,
          "pitch": 0.19049243517702052,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06678114628840248,
        "pitch": 0.005883070997505513,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 0.9703534277947554,
          "pitch": 0.18950360940548272,
          "rotation": 0,
          "target": "2-dinning"
        },
        {
          "yaw": 1.9238646241575363,
          "pitch": 0.11486868125435734,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dinning",
      "name": "DINNING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07746383240002075,
        "pitch": 0,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 0.6786898614473671,
          "pitch": 0.055565477716754685,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -0.8106289910147382,
          "pitch": 0.08374514935117361,
          "rotation": 10.995574287564278,
          "target": "5-mr-bedroom"
        },
        {
          "yaw": -1.0380627332531063,
          "pitch": 0.07404393721373381,
          "rotation": 4.71238898038469,
          "target": "6-common-1"
        },
        {
          "yaw": -0.9606970191423301,
          "pitch": -0.040586448993458646,
          "rotation": 4.71238898038469,
          "target": "7-common-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.026348504951464236,
          "pitch": 0.10774946651369532,
          "rotation": 0,
          "target": "4-dry-pentry"
        },
        {
          "yaw": -1.9695755879817796,
          "pitch": 0.14492581326458875,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -1.2039627568670959,
          "pitch": 0.12949971652475156,
          "rotation": 12.566370614359176,
          "target": "2-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dry-pentry",
      "name": "dry pentry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2388037074453457,
          "pitch": 0.12947924712808856,
          "rotation": 1.5707963267948966,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-mr-bedroom",
      "name": "mr bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8793345200199187,
          "pitch": 0.04369128330419514,
          "rotation": 1.5707963267948966,
          "target": "2-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-common-1",
      "name": "common 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7828765889521456,
          "pitch": 0.07109143919879735,
          "rotation": 0,
          "target": "2-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-common-2",
      "name": "common 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7303087627870006,
          "pitch": 0.017701231278499208,
          "rotation": 10.995574287564278,
          "target": "2-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-mb-tiolet",
      "name": "mb tiolet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8589563071701889,
          "pitch": -0.031035194621974682,
          "rotation": 1.5707963267948966,
          "target": "8-mb-tiolet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-main-tiolet",
      "name": "main tiolet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8700877025242892,
          "pitch": 0.11899861739203743,
          "rotation": 1.5707963267948966,
          "target": "9-main-tiolet"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
