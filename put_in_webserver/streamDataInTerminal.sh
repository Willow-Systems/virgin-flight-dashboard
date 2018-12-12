#!/bin/bash

exit="false"
while [[ "$exit" != "true" ]]; do

	curl 'http://services.inflightpanasonic.aero/inflight/services/flightdata/v1/flightdata' 
	sleep 1
	clear

done
