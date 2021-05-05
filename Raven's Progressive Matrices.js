/************************************* 
 * Raven'S Progressive Matrices Test *
 *************************************/

import { PsychoJS } from './lib/core-2021.1.1.js';
import * as core from './lib/core-2021.1.1.js';
import { TrialHandler } from './lib/data-2021.1.1.js';
import { Scheduler } from './lib/util-2021.1.1.js';
import * as visual from './lib/visual-2021.1.1.js';
import * as sound from './lib/sound-2021.1.1.js';
import * as util from './lib/util-2021.1.1.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Raven's Progressive Matrices';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(doneRoutineBegin());
flowScheduler.add(doneRoutineEachFrame());
flowScheduler.add(doneRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': '3.jpg', 'path': '3.jpg'},
    {'name': '57.jpg', 'path': '57.jpg'},
    {'name': '6.jpg', 'path': '6.jpg'},
    {'name': '55.jpg', 'path': '55.jpg'},
    {'name': '52.jpg', 'path': '52.jpg'},
    {'name': '51.jpg', 'path': '51.jpg'},
    {'name': '15.jpg', 'path': '15.jpg'},
    {'name': '42.jpg', 'path': '42.jpg'},
    {'name': '25.jpg', 'path': '25.jpg'},
    {'name': '58.jpg', 'path': '58.jpg'},
    {'name': '10.jpg', 'path': '10.jpg'},
    {'name': '9.jpg', 'path': '9.jpg'},
    {'name': '7.jpg', 'path': '7.jpg'},
    {'name': '22.jpg', 'path': '22.jpg'},
    {'name': '45.jpg', 'path': '45.jpg'},
    {'name': '23.jpg', 'path': '23.jpg'},
    {'name': '38.jpg', 'path': '38.jpg'},
    {'name': '11.jpg', 'path': '11.jpg'},
    {'name': '21.jpg', 'path': '21.jpg'},
    {'name': '53.jpg', 'path': '53.jpg'},
    {'name': '32.jpg', 'path': '32.jpg'},
    {'name': '46.jpg', 'path': '46.jpg'},
    {'name': '56.jpg', 'path': '56.jpg'},
    {'name': '44.jpg', 'path': '44.jpg'},
    {'name': '29.jpg', 'path': '29.jpg'},
    {'name': '28.jpg', 'path': '28.jpg'},
    {'name': '41.jpg', 'path': '41.jpg'},
    {'name': '19.jpg', 'path': '19.jpg'},
    {'name': '27.jpg', 'path': '27.jpg'},
    {'name': '26.jpg', 'path': '26.jpg'},
    {'name': '48.jpg', 'path': '48.jpg'},
    {'name': '60.jpg', 'path': '60.jpg'},
    {'name': '34.jpg', 'path': '34.jpg'},
    {'name': '39.jpg', 'path': '39.jpg'},
    {'name': '13.jpg', 'path': '13.jpg'},
    {'name': '17.jpg', 'path': '17.jpg'},
    {'name': '31.jpg', 'path': '31.jpg'},
    {'name': '2.jpg', 'path': '2.jpg'},
    {'name': '49.jpg', 'path': '49.jpg'},
    {'name': '30.jpg', 'path': '30.jpg'},
    {'name': '35.jpg', 'path': '35.jpg'},
    {'name': '5.jpg', 'path': '5.jpg'},
    {'name': '59.jpg', 'path': '59.jpg'},
    {'name': '12.jpg', 'path': '12.jpg'},
    {'name': '40.jpg', 'path': '40.jpg'},
    {'name': 'RPM_items.xlsx', 'path': 'RPM_items.xlsx'},
    {'name': '47.jpg', 'path': '47.jpg'},
    {'name': '33.jpg', 'path': '33.jpg'},
    {'name': '16.jpg', 'path': '16.jpg'},
    {'name': '36.jpg', 'path': '36.jpg'},
    {'name': '1.jpg', 'path': '1.jpg'},
    {'name': '4.jpg', 'path': '4.jpg'},
    {'name': '54.jpg', 'path': '54.jpg'},
    {'name': '50.jpg', 'path': '50.jpg'},
    {'name': '18.jpg', 'path': '18.jpg'},
    {'name': '24.jpg', 'path': '24.jpg'},
    {'name': '8.jpg', 'path': '8.jpg'},
    {'name': '14.jpg', 'path': '14.jpg'},
    {'name': '43.jpg', 'path': '43.jpg'},
    {'name': '37.jpg', 'path': '37.jpg'},
    {'name': '20.jpg', 'path': '20.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.1';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'During this task, you will see designs with a part left out.\n\nDecide which of the pieces below will complete the design.\n\nPress the number key for your choice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  cont_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cont_text',
    text: 'Press SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  score = 0;
  wrongAnswer = 0;
  
  // Initialize components for Routine "done"
  doneClock = new util.Clock();
  done_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'done_text',
    text: 'Good work!\n\nYou have completed this task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Press SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function instrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_resp.keys = undefined;
    instr_resp.rt = undefined;
    _instr_resp_allKeys = [];
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(cont_text);
    instrComponents.push(instr_resp);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function instrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr'-------
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }

    
    // *cont_text* updates
    if (t >= 0.0 && cont_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_text.tStart = t;  // (not accounting for frame time here)
      cont_text.frameNStart = frameN;  // exact frame index
      
      cont_text.setAutoDraw(true);
    }

    
    // *instr_resp* updates
    if (t >= 0.0 && instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp.tStart = t;  // (not accounting for frame time here)
      instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.clearEvents(); });
    }

    if (instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr_resp_allKeys = _instr_resp_allKeys.concat(theseKeys);
      if (_instr_resp_allKeys.length > 0) {
        instr_resp.keys = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_resp.rt = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'RPM_items.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image.setImage(image_file);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == correct) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    if ((key_resp.corr === 1)) {
        score = (score + 1);
        wrongAnswer = 0;
    } else {
        wrongAnswer += 1;
    }
    if ((wrongAnswer === 3)) {
        trials.finished = true;
    }
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function doneRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'done'-------
    t = 0;
    doneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    doneComponents = [];
    doneComponents.push(done_text);
    doneComponents.push(key_resp_2);
    doneComponents.push(end_text);
    
    for (const thisComponent of doneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function doneRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'done'-------
    // get current time
    t = doneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *done_text* updates
    if (t >= 0.0 && done_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      done_text.tStart = t;  // (not accounting for frame time here)
      done_text.frameNStart = frameN;  // exact frame index
      
      done_text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of doneComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function doneRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'done'-------
    for (const thisComponent of doneComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "done" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
