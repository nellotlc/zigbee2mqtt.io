"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61296],{98917:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>n});var i=o(24691);const a={},d=(0,o(88242).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[11]||(t[11]=(0,i.Lk)("h1",{id:"inovelli-vzm36",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#inovelli-vzm36"},[(0,i.Lk)("span",null,"Inovelli VZM36")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"VZM36")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Inovelli"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Inovelli")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Fan canopy module")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"light (state, brightness), fan (state, mode), breeze mode, dimmingSpeedUpRemote_1, rampRateOffToOnRemote_1, dimmingSpeedDownRemote_1, rampRateOnToOffRemote_1, minimumLevel_1, maximumLevel_1, autoTimerOff_1, defaultLevelRemote_1, stateAfterPowerRestored_1, higherOutputInNonNeutral_1, quickStartTime_1, quickStartLevel_1, leadingTrailingEdge_1, smartBulbMode_1, ledColorWhenOn_1, ledIntensityWhenOn_1, outputMode_1, dimmingSpeedUpRemote_2, rampRateOffToOnRemote_2, dimmingSpeedDownRemote_2, rampRateOnToOffRemote_2, minimumLevel_2, maximumLevel_2, autoTimerOff_2, defaultLevelRemote_2, stateAfterPowerRestored_2, quickStartTime_2, smartBulbMode_2, outputMode_2, identify, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/VZM36.png",alt:"Inovelli VZM36"})])],-1))])]),t[12]||(t[12]=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[13]||(t[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,i.Fv)('<ul><li><code>identify_timeout</code>: Sets duration of identification procedure in seconds (i.e., how long device would flash). Value ranges from 1 to 30 seconds (default 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="fan" tabindex="-1"><a class="header-anchor" href="#fan"><span>Fan</span></a></h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>off</code>, <code>low</code>, <code>smart</code>, <code>medium</code>, <code>high</code>, <code>on</code>.</p><h3 id="breeze-mode-composite" tabindex="-1"><a class="header-anchor" href="#breeze-mode-composite"><span>Breeze mode (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breezeMode&quot;: {&quot;speed1&quot;: VALUE, &quot;time1&quot;: VALUE, &quot;speed2&quot;: VALUE, &quot;time2&quot;: VALUE, &quot;speed3&quot;: VALUE, &quot;time3&quot;: VALUE, &quot;speed4&quot;: VALUE, &quot;time4&quot;: VALUE, &quot;speed5&quot;: VALUE, &quot;time5&quot;: VALUE}}</code></p><ul><li><code>speed1</code> (enum): Step 1 Speed allowed values: <code>low</code>, <code>medium</code>, <code>high</code></li><li><code>time1</code> (numeric): Duration (s) for fan in Step 1 min value is 1, max value is 80</li><li><code>speed2</code> (enum): Step 2 Speed allowed values: <code>low</code>, <code>medium</code>, <code>high</code></li><li><code>time2</code> (numeric): Duration (s) for fan in Step 2 min value is 1, max value is 80</li><li><code>speed3</code> (enum): Step 3 Speed allowed values: <code>low</code>, <code>medium</code>, <code>high</code></li><li><code>time3</code> (numeric): Duration (s) for fan in Step 3 min value is 1, max value is 80</li><li><code>speed4</code> (enum): Step 4 Speed allowed values: <code>low</code>, <code>medium</code>, <code>high</code></li><li><code>time4</code> (numeric): Duration (s) for fan in Step 4 min value is 1, max value is 80</li><li><code>speed5</code> (enum): Step 5 Speed allowed values: <code>low</code>, <code>medium</code>, <code>high</code></li><li><code>time5</code> (numeric): Duration (s) for fan in Step 5 min value is 1, max value is 80</li></ul><h3 id="dimmingspeedupremote-1-numeric" tabindex="-1"><a class="header-anchor" href="#dimmingspeedupremote-1-numeric"><span>DimmingSpeedUpRemote 1 (numeric)</span></a></h3><p>This changes the speed that the light dims up when controlled from the hub. A setting of 0 turns the light immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 25 (2.5s). Value can be found in the published state on the <code>dimmingSpeedUpRemote_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;dimmingSpeedUpRemote_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;dimmingSpeedUpRemote_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>127</code>.</p><h3 id="ramprateofftoonremote-1-numeric" tabindex="-1"><a class="header-anchor" href="#ramprateofftoonremote-1-numeric"><span>RampRateOffToOnRemote 1 (numeric)</span></a></h3><p>This changes the speed that the light turns on when controlled from the hub. A setting of 0 turns the light immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting.. Value can be found in the published state on the <code>rampRateOffToOnRemote_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;rampRateOffToOnRemote_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rampRateOffToOnRemote_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>127</code>.</p><h3 id="dimmingspeeddownremote-1-numeric" tabindex="-1"><a class="header-anchor" href="#dimmingspeeddownremote-1-numeric"><span>DimmingSpeedDownRemote 1 (numeric)</span></a></h3><p>This changes the speed that the light dims down when controlled from the hub. A setting of 0 turns the light immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting.. Value can be found in the published state on the <code>dimmingSpeedDownRemote_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;dimmingSpeedDownRemote_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;dimmingSpeedDownRemote_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>127</code>.</p><h3 id="ramprateontooffremote-1-numeric" tabindex="-1"><a class="header-anchor" href="#ramprateontooffremote-1-numeric"><span>RampRateOnToOffRemote 1 (numeric)</span></a></h3><p>This changes the speed that the light turns off when controlled from the hub. A setting of &#39;instant&#39; turns the light immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with rampRateOffToOnRemote setting.. Value can be found in the published state on the <code>rampRateOnToOffRemote_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;rampRateOnToOffRemote_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rampRateOnToOffRemote_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>127</code>.</p><h3 id="minimumlevel-1-numeric" tabindex="-1"><a class="header-anchor" href="#minimumlevel-1-numeric"><span>MinimumLevel 1 (numeric)</span></a></h3><p>The minimum level that the dimmer allows the bulb to be dimmed to. Useful when the user has an LED bulb that does not turn on or flickers at a lower level.. Value can be found in the published state on the <code>minimumLevel_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;minimumLevel_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimumLevel_1&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="maximumlevel-1-numeric" tabindex="-1"><a class="header-anchor" href="#maximumlevel-1-numeric"><span>MaximumLevel 1 (numeric)</span></a></h3><p>The maximum level that the dimmer allows the bulb to be dimmed to.Useful when the user has an LED bulb that reaches its maximum level before the dimmer value of 99 or when the user wants to limit the maximum brightness.. Value can be found in the published state on the <code>maximumLevel_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;maximumLevel_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;maximumLevel_1&quot;: NEW_VALUE}</code>. The minimal value is <code>2</code> and the maximum value is <code>255</code>.</p><h3 id="autotimeroff-1-numeric" tabindex="-1"><a class="header-anchor" href="#autotimeroff-1-numeric"><span>AutoTimerOff 1 (numeric)</span></a></h3><p>Automatically turns the light off after this many seconds. When the light is turned on a timer is started. When the timer expires, the light is turned off. 0 = Auto off is disabled.. Value can be found in the published state on the <code>autoTimerOff_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;autoTimerOff_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;autoTimerOff_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>32767</code>. The unit of this value is <code>seconds</code>. Besides the numeric values the following values are accepted: <code>Disabled</code>.</p><h3 id="defaultlevelremote-1-numeric" tabindex="-1"><a class="header-anchor" href="#defaultlevelremote-1-numeric"><span>DefaultLevelRemote 1 (numeric)</span></a></h3><p>Default level for the light when it is turned on from the hub. A setting of 255 means that the light will return to the level that it was on before it was turned off.. Value can be found in the published state on the <code>defaultLevelRemote_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;defaultLevelRemote_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;defaultLevelRemote_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="stateafterpowerrestored-1-numeric" tabindex="-1"><a class="header-anchor" href="#stateafterpowerrestored-1-numeric"><span>StateAfterPowerRestored 1 (numeric)</span></a></h3><p>The state the light should return to when power is restored after power failure. 0 = off, 1-254 = level, 255 = previous.. Value can be found in the published state on the <code>stateAfterPowerRestored_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;stateAfterPowerRestored_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;stateAfterPowerRestored_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="higheroutputinnonneutral-1-enum" tabindex="-1"><a class="header-anchor" href="#higheroutputinnonneutral-1-enum"><span>HigherOutputInNonNeutral 1 (enum)</span></a></h3><p>Increase level in non-neutral mode for light.. Value can be found in the published state on the <code>higherOutputInNonNeutral_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;higherOutputInNonNeutral_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;higherOutputInNonNeutral_1&quot;: NEW_VALUE}</code>. The possible values are: <code>Disabled (default)</code>, <code>Enabled</code>.</p><h3 id="quickstarttime-1-numeric" tabindex="-1"><a class="header-anchor" href="#quickstarttime-1-numeric"><span>QuickStartTime 1 (numeric)</span></a></h3><p>Duration of full power output while lamp tranisitions from Off to On. In 60th of second. 0 = disable, 1 = 1/60s, 60 = 1s. Value can be found in the published state on the <code>quickStartTime_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;quickStartTime_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;quickStartTime_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>60</code>.</p><h3 id="quickstartlevel-1-numeric" tabindex="-1"><a class="header-anchor" href="#quickstartlevel-1-numeric"><span>QuickStartLevel 1 (numeric)</span></a></h3><p>Level of power output during Quick Start Light time (P23).. Value can be found in the published state on the <code>quickStartLevel_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;quickStartLevel_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;quickStartLevel_1&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="leadingtrailingedge-1-enum" tabindex="-1"><a class="header-anchor" href="#leadingtrailingedge-1-enum"><span>LeadingTrailingEdge 1 (enum)</span></a></h3><p>Leading Edge has a value of 0 and is the default value, whereas Trailing Edge has a value of 1. Please note that Trailing Edge is only available on neutral single-pole and neutral multi-way with an aux/add-on switch (multi-way with a dumb/existing switch and non-neutral setups are not supported and will default back to Leading Edge).. Value can be found in the published state on the <code>leadingTrailingEdge_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;leadingTrailingEdge_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;leadingTrailingEdge_1&quot;: NEW_VALUE}</code>. The possible values are: <code>Leading Edge</code>, <code>Trailing Edge</code>.</p><h3 id="smartbulbmode-1-enum" tabindex="-1"><a class="header-anchor" href="#smartbulbmode-1-enum"><span>SmartBulbMode 1 (enum)</span></a></h3><p>For use with Smart Bulbs that need constant power and are controlled via commands rather than power.. Value can be found in the published state on the <code>smartBulbMode_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;smartBulbMode_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;smartBulbMode_1&quot;: NEW_VALUE}</code>. The possible values are: <code>Disabled</code>, <code>Smart Bulb Mode</code>.</p><h3 id="ledcolorwhenon-1-numeric" tabindex="-1"><a class="header-anchor" href="#ledcolorwhenon-1-numeric"><span>LedColorWhenOn 1 (numeric)</span></a></h3><p>Set the color of the LED Indicator when the load is on.. Value can be found in the published state on the <code>ledColorWhenOn_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ledColorWhenOn_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ledColorWhenOn_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>. Besides the numeric values the following values are accepted: <code>Red</code>, <code>Orange</code>, <code>Yellow</code>, <code>Green</code>, <code>Cyan</code>, <code>Blue</code>, <code>Violet</code>, <code>Pink</code>, <code>White</code>.</p><h3 id="ledintensitywhenon-1-numeric" tabindex="-1"><a class="header-anchor" href="#ledintensitywhenon-1-numeric"><span>LedIntensityWhenOn 1 (numeric)</span></a></h3><p>Set the intensity of the LED Indicator when the load is on.. Value can be found in the published state on the <code>ledIntensityWhenOn_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ledIntensityWhenOn_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ledIntensityWhenOn_1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="outputmode-1-enum" tabindex="-1"><a class="header-anchor" href="#outputmode-1-enum"><span>OutputMode 1 (enum)</span></a></h3><p>Use device as a Dimmer or an On/Off switch.. Value can be found in the published state on the <code>outputMode_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;outputMode_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;outputMode_1&quot;: NEW_VALUE}</code>. The possible values are: <code>Dimmer</code>, <code>On/Off</code>.</p><h3 id="dimmingspeedupremote-2-numeric" tabindex="-1"><a class="header-anchor" href="#dimmingspeedupremote-2-numeric"><span>DimmingSpeedUpRemote 2 (numeric)</span></a></h3><p>This changes the speed that the fan ramps up when controlled from the hub. A setting of 0 turns the fan immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 25 (2.5s). Value can be found in the published state on the <code>dimmingSpeedUpRemote_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;dimmingSpeedUpRemote_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;dimmingSpeedUpRemote_2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>127</code>.</p><h3 id="ramprateofftoonremote-2-numeric" tabindex="-1"><a class="header-anchor" href="#ramprateofftoonremote-2-numeric"><span>RampRateOffToOnRemote 2 (numeric)</span></a></h3><p>This changes the speed that the fan turns on when controlled from the hub. A setting of 0 turns the fan immediately on. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting.. Value can be found in the published state on the <code>rampRateOffToOnRemote_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;rampRateOffToOnRemote_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rampRateOffToOnRemote_2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>127</code>.</p><h3 id="dimmingspeeddownremote-2-numeric" tabindex="-1"><a class="header-anchor" href="#dimmingspeeddownremote-2-numeric"><span>DimmingSpeedDownRemote 2 (numeric)</span></a></h3><p>This changes the speed that the fan ramps down when controlled from the hub. A setting of 0 turns the fan immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with dimmingSpeedUpRemote setting.. Value can be found in the published state on the <code>dimmingSpeedDownRemote_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;dimmingSpeedDownRemote_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;dimmingSpeedDownRemote_2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>127</code>.</p><h3 id="ramprateontooffremote-2-numeric" tabindex="-1"><a class="header-anchor" href="#ramprateontooffremote-2-numeric"><span>RampRateOnToOffRemote 2 (numeric)</span></a></h3><p>This changes the speed that the fan turns off when controlled from the hub. A setting of &#39;instant&#39; turns the fan immediately off. Increasing the value slows down the transition speed. Every number represents 100ms. Default = 127 - Keep in sync with rampRateOffToOnRemote setting.. Value can be found in the published state on the <code>rampRateOnToOffRemote_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;rampRateOnToOffRemote_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rampRateOnToOffRemote_2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>127</code>.</p><h3 id="minimumlevel-2-numeric" tabindex="-1"><a class="header-anchor" href="#minimumlevel-2-numeric"><span>MinimumLevel 2 (numeric)</span></a></h3><p>The minimum level that the fan can be set to.. Value can be found in the published state on the <code>minimumLevel_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;minimumLevel_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimumLevel_2&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="maximumlevel-2-numeric" tabindex="-1"><a class="header-anchor" href="#maximumlevel-2-numeric"><span>MaximumLevel 2 (numeric)</span></a></h3><p>The maximum level that the fan can be set to.. Value can be found in the published state on the <code>maximumLevel_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;maximumLevel_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;maximumLevel_2&quot;: NEW_VALUE}</code>. The minimal value is <code>2</code> and the maximum value is <code>255</code>.</p><h3 id="autotimeroff-2-numeric" tabindex="-1"><a class="header-anchor" href="#autotimeroff-2-numeric"><span>AutoTimerOff 2 (numeric)</span></a></h3><p>Automatically turns the fan off after this many seconds. When the fan is turned on a timer is started. When the timer expires, the switch is turned off. 0 = Auto off is disabled.. Value can be found in the published state on the <code>autoTimerOff_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;autoTimerOff_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;autoTimerOff_2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>32767</code>. The unit of this value is <code>seconds</code>. Besides the numeric values the following values are accepted: <code>Disabled</code>.</p><h3 id="defaultlevelremote-2-numeric" tabindex="-1"><a class="header-anchor" href="#defaultlevelremote-2-numeric"><span>DefaultLevelRemote 2 (numeric)</span></a></h3><p>Default level for the fan when it is turned on from the hub. A setting of 255 means that the fan will return to the level that it was on before it was turned off.. Value can be found in the published state on the <code>defaultLevelRemote_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;defaultLevelRemote_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;defaultLevelRemote_2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="stateafterpowerrestored-2-numeric" tabindex="-1"><a class="header-anchor" href="#stateafterpowerrestored-2-numeric"><span>StateAfterPowerRestored 2 (numeric)</span></a></h3><p>The state the fan should return to when power is restored after power failure. 0 = off, 1-254 = level, 255 = previous.. Value can be found in the published state on the <code>stateAfterPowerRestored_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;stateAfterPowerRestored_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;stateAfterPowerRestored_2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="quickstarttime-2-numeric" tabindex="-1"><a class="header-anchor" href="#quickstarttime-2-numeric"><span>QuickStartTime 2 (numeric)</span></a></h3><p>Duration of full power output while fan tranisitions from Off to On. In 60th of second. 0 = disable, 1 = 1/60s, 60 = 1s. Value can be found in the published state on the <code>quickStartTime_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;quickStartTime_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;quickStartTime_2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>60</code>.</p><h3 id="smartbulbmode-2-enum" tabindex="-1"><a class="header-anchor" href="#smartbulbmode-2-enum"><span>SmartBulbMode 2 (enum)</span></a></h3><p>For use with Smart Fans that need constant power and are controlled via commands rather than power.. Value can be found in the published state on the <code>smartBulbMode_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;smartBulbMode_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;smartBulbMode_2&quot;: NEW_VALUE}</code>. The possible values are: <code>Disabled</code>, <code>Smart Fan Mode</code>.</p><h3 id="outputmode-2-enum" tabindex="-1"><a class="header-anchor" href="#outputmode-2-enum"><span>OutputMode 2 (enum)</span></a></h3><p>Use device in ceiling fan (3-Speed) or in exhaust fan (On/Off) mode.. Value can be found in the published state on the <code>outputMode_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;outputMode_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;outputMode_2&quot;: NEW_VALUE}</code>. The possible values are: <code>Ceiling Fan (3-Speed)</code>, <code>Exhaust Fan (On/Off)</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',74))])}]]),n=JSON.parse('{"path":"/devices/VZM36.html","title":"Inovelli VZM36 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Inovelli VZM36 control via MQTT","description":"Integrate your Inovelli VZM36 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-02-29T20:20:58.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Fan","slug":"fan","link":"#fan","children":[]},{"level":3,"title":"Breeze mode (composite)","slug":"breeze-mode-composite","link":"#breeze-mode-composite","children":[]},{"level":3,"title":"DimmingSpeedUpRemote 1 (numeric)","slug":"dimmingspeedupremote-1-numeric","link":"#dimmingspeedupremote-1-numeric","children":[]},{"level":3,"title":"RampRateOffToOnRemote 1 (numeric)","slug":"ramprateofftoonremote-1-numeric","link":"#ramprateofftoonremote-1-numeric","children":[]},{"level":3,"title":"DimmingSpeedDownRemote 1 (numeric)","slug":"dimmingspeeddownremote-1-numeric","link":"#dimmingspeeddownremote-1-numeric","children":[]},{"level":3,"title":"RampRateOnToOffRemote 1 (numeric)","slug":"ramprateontooffremote-1-numeric","link":"#ramprateontooffremote-1-numeric","children":[]},{"level":3,"title":"MinimumLevel 1 (numeric)","slug":"minimumlevel-1-numeric","link":"#minimumlevel-1-numeric","children":[]},{"level":3,"title":"MaximumLevel 1 (numeric)","slug":"maximumlevel-1-numeric","link":"#maximumlevel-1-numeric","children":[]},{"level":3,"title":"AutoTimerOff 1 (numeric)","slug":"autotimeroff-1-numeric","link":"#autotimeroff-1-numeric","children":[]},{"level":3,"title":"DefaultLevelRemote 1 (numeric)","slug":"defaultlevelremote-1-numeric","link":"#defaultlevelremote-1-numeric","children":[]},{"level":3,"title":"StateAfterPowerRestored 1 (numeric)","slug":"stateafterpowerrestored-1-numeric","link":"#stateafterpowerrestored-1-numeric","children":[]},{"level":3,"title":"HigherOutputInNonNeutral 1 (enum)","slug":"higheroutputinnonneutral-1-enum","link":"#higheroutputinnonneutral-1-enum","children":[]},{"level":3,"title":"QuickStartTime 1 (numeric)","slug":"quickstarttime-1-numeric","link":"#quickstarttime-1-numeric","children":[]},{"level":3,"title":"QuickStartLevel 1 (numeric)","slug":"quickstartlevel-1-numeric","link":"#quickstartlevel-1-numeric","children":[]},{"level":3,"title":"LeadingTrailingEdge 1 (enum)","slug":"leadingtrailingedge-1-enum","link":"#leadingtrailingedge-1-enum","children":[]},{"level":3,"title":"SmartBulbMode 1 (enum)","slug":"smartbulbmode-1-enum","link":"#smartbulbmode-1-enum","children":[]},{"level":3,"title":"LedColorWhenOn 1 (numeric)","slug":"ledcolorwhenon-1-numeric","link":"#ledcolorwhenon-1-numeric","children":[]},{"level":3,"title":"LedIntensityWhenOn 1 (numeric)","slug":"ledintensitywhenon-1-numeric","link":"#ledintensitywhenon-1-numeric","children":[]},{"level":3,"title":"OutputMode 1 (enum)","slug":"outputmode-1-enum","link":"#outputmode-1-enum","children":[]},{"level":3,"title":"DimmingSpeedUpRemote 2 (numeric)","slug":"dimmingspeedupremote-2-numeric","link":"#dimmingspeedupremote-2-numeric","children":[]},{"level":3,"title":"RampRateOffToOnRemote 2 (numeric)","slug":"ramprateofftoonremote-2-numeric","link":"#ramprateofftoonremote-2-numeric","children":[]},{"level":3,"title":"DimmingSpeedDownRemote 2 (numeric)","slug":"dimmingspeeddownremote-2-numeric","link":"#dimmingspeeddownremote-2-numeric","children":[]},{"level":3,"title":"RampRateOnToOffRemote 2 (numeric)","slug":"ramprateontooffremote-2-numeric","link":"#ramprateontooffremote-2-numeric","children":[]},{"level":3,"title":"MinimumLevel 2 (numeric)","slug":"minimumlevel-2-numeric","link":"#minimumlevel-2-numeric","children":[]},{"level":3,"title":"MaximumLevel 2 (numeric)","slug":"maximumlevel-2-numeric","link":"#maximumlevel-2-numeric","children":[]},{"level":3,"title":"AutoTimerOff 2 (numeric)","slug":"autotimeroff-2-numeric","link":"#autotimeroff-2-numeric","children":[]},{"level":3,"title":"DefaultLevelRemote 2 (numeric)","slug":"defaultlevelremote-2-numeric","link":"#defaultlevelremote-2-numeric","children":[]},{"level":3,"title":"StateAfterPowerRestored 2 (numeric)","slug":"stateafterpowerrestored-2-numeric","link":"#stateafterpowerrestored-2-numeric","children":[]},{"level":3,"title":"QuickStartTime 2 (numeric)","slug":"quickstarttime-2-numeric","link":"#quickstarttime-2-numeric","children":[]},{"level":3,"title":"SmartBulbMode 2 (enum)","slug":"smartbulbmode-2-enum","link":"#smartbulbmode-2-enum","children":[]},{"level":3,"title":"OutputMode 2 (enum)","slug":"outputmode-2-enum","link":"#outputmode-2-enum","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730841497000},"filePathRelative":"devices/VZM36.md"}')}}]);