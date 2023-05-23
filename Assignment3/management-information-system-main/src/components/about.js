import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function about() {
    return (
        <div>
            <section className="space-100  ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 text-right col-sm-push-6">
                            <span>
                                <img src="img.png" alt="Automation" />
                            </span>
                        </div>
                        <div className="col-sm-6 text-left col-sm-pull-6">
                            <div className="clearfix ">
                                <h3 className="title11">
                                    Student Management System
                                </h3>
                            </div>
                            <ul className="checkmark-list">
                                <li>
                                    Admin has all the access to see all the data and Edit it.
                                </li>
                                <li>
                                   To access or manage the data go to navbar's manage ,
                                   then a dropdown will pop up choose the section you want see or modify. 
                                </li>
                              
                                <li>
                                    you will see the data of that selected section.
                                </li>
                                <li>
                                    If you want to add the data directly hover on section you want to edit in manage and infront of that you will see add and view buttons click on that.
                                </li>
                                <li>You can also directly add the data of any section from the view data page of the same section as at bottom-right their is a add icon which will redirct you to add page of that section. </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
