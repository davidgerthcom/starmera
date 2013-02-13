<?php

abstract class AbstractStarmeraController extends Zend_Controller_Action
{

    public function init()
    {
        $this->view->headScript()->appendFile('/scripts/jquery/jquery-1.9.1.min.js');
        $this->view->headScript()->appendFile('/scripts/bootstrap/bootstrap.min.js');
        $this->view->headScript()->appendFile('/scripts/backbone.marionette/underscore.js');
        $this->view->headScript()->appendFile('/scripts/backbone.marionette/json2.js');
        $this->view->headScript()->appendFile('/scripts/backbone.marionette/backbone.js');
        $this->view->headScript()->appendFile('/scripts/backbone.marionette/backbone-babysitter.js');
        $this->view->headScript()->appendFile('/scripts/backbone.marionette/backbone-wreqr.js');
        $this->view->headScript()->appendFile('/scripts/backbone.marionette/backbone-marionette.js');
    }
}







