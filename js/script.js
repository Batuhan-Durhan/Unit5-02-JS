// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML-Slider-Example/",
    }
  )
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  const positive = parseInt(document.getElementById("slider").value)
  const negative = parseInt(document.getElementById("slider").value)
  const neutral = parseInt(document.getElementById("slider").value)
  
  if (slider.value >= 0) {
    document.getElementById("number").innerHTML = "Number is " + positive + " positive"
  }

  else if (slider.value < 0) {
    document.getElementById("number").innerHTML = "Number is " + negative + " negative"
  }

  if (slider.value == 0) {
    document.getElementById("number").innerHTML = "Number is " + neutral + " neutral"
  }
}
