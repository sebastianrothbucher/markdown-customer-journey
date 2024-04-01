document.querySelectorAll('pre.journey, .language-journey').forEach(journeyNode => {
  const journeyStepsNode = document.createElement('div');
  journeyStepsNode.setAttribute('class', 'journey-steps');
  journeyNode.innerText.split(/[\r\n]+/).forEach(step => {
    const stepNode = document.createElement('div');
    stepNode.setAttribute('class', 'journey-step-chevron');
    stepNode.appendChild(document.createElement('span')).innerText = step;
    journeyStepsNode.appendChild(stepNode);
  });
  journeyNode.parentNode.insertBefore(journeyStepsNode, journeyNode);
  journeyNode.style.display = 'none';
});
