<?php
/**
 * Created by PhpStorm.
 * User: bin.shen
 * Date: 5/2/16
 * Time: 09:56
 */

 if ( ! defined('BASEPATH')) exit('No direct script access allowed');

//t
class Index extends MY_Controller {

    public function __construct()
    {
        parent::__construct();
    
    }

    public function index($page=1) {

       echo "hello world! nodejs Double Y";
       die();
    }

    public function chat_login(){
        $this->load->view('chat_login');
    }

    public function chat($name){
        if(!$name){
            redirect(site_url('/index/chat_login'));
        }
        $data['name'] = $name;
        $this->load->view('chat',$data);
    }




}