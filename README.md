# Examples

## Home Assistant and MQTT Broker

### Run

```
./docker-compose.sh up
```

### MQTT Error and setup

If you get error from HA about MQTT then you need
[to setup MQTT over GUI](https://www.home-assistant.io/integrations/mqtt). Use
`mosquitto` for field "Broker".

```
ERROR (MainThread) [homeassistant] Error doing job: Task exception was never retrieved
Traceback (most recent call last):
  File "/usr/lib/python3.9/site-packages/homeassistant/components/mqtt_eventstream/__init__.py", line 83, in _event_publisher
    await mqtt.async_publish(hass, pub_topic, msg)
  File "/usr/lib/python3.9/site-packages/homeassistant/components/mqtt/client.py", line 122, in async_publish
    await hass.data[DATA_MQTT].async_publish(topic, outgoing_payload, qos, retain)
  File "/usr/lib/python3.9/site-packages/homeassistant/components/mqtt/client.py", line 374, in async_publish
    _raise_on_error(msg_info.rc)
  File "/usr/lib/python3.9/site-packages/homeassistant/components/mqtt/client.py", line 647, in _raise_on_error
    raise HomeAssistantError(
homeassistant.exceptions.HomeAssistantError: Error talking to MQTT: The client is not currently connected.
```
