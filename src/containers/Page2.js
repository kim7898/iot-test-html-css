import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import Navbar2 from '../component/Navbar2';


class Page2 extends Component {



    render() {


        return (
            <div className="page2" >
                <Navbar />
                <div className="d-flex flex-row ">

                    <div class="sidenav p-3">
                        <a href="/"><i class="fas fa-home"></i></a>
                        <a href="/"  className="choosen" ><i class="fas fa-headset"/></a>
                        <a href="/"><i class="fas fa-chart-line"></i></a>
                        <a href="/"><i class="fas fa-cog"></i></a>
                    </div>
                    <div className="flex-column p-9 ">
                        <Navbar2 />
                        <div className="content row">
                            <div className="col-4">
                                <div className="box">
                                    <div class="d-flex justify-content-around">
                                        <div className="col-4">
                                            <p className="vip">KHÁCH HÀNG VIP</p>
                                            <p>INBOUND</p>
                                        </div>
                                        <div className='col-8 time'><i class="fas fa-headphones"></i>00:00:07</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="box">
                                    <div class="d-flex justify-content-around">
                                        <div className="col-4">
                                            <p> Tên khách hàng: </p>
                                            <p>địa chỉ : </p>
                                            <p>dịch vụ viễn thông :</p>
                                            <p>gói cước:</p>
                                            <p>trạng thái:</p>
                                            <p>dịch vụ đang sử dụng :</p>
                                        </div>
                                        <div className="col-4 strong">
                                            <p>  ĐỖ DUY BÌNH</p>
                                            <p>Hà đông - Hà Nội </p>
                                            <p>thuê bao trả trước</p>
                                            <p>tomato</p>
                                            <p>dịch vụ hai chiều </p>
                                            <p>MCA , Movile TV , MI50</p>
                                        </div>
                                        <div className="col-4">
                                            <p>basic : <strong>500</strong></p>
                                            <p>KM : <strong>15.5</strong> </p>
                                            <p>data : <strong> 500M</strong> </p>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="box strong">
                                    <ul class="nav nav-tabs">
                                        <li class="active"><a href="#">Voice</a></li>
                                        <li><a href="#">Menu 1</a></li>
                                        <li><a href="#">Menu 2</a></li>
                                        <li><a href="#">Menu 3</a></li>
                                    </ul>
                                    <p >Thông tin lịch sử cuộc gọi</p>
                                    <table className="table ">
                                        <thead>
                                            <tr >
                                                <th>call ID</th>
                                                < th >Call type</th>
                                                <th >Agent</th>
                                                <th > start time</th>
                                                <th >End time</th>
                                                <th c>thời gian gọi </th>
                                            </tr>
                                        </thead>
                                        <tbody clas>
                                            <tr>
                                                <td>John</td>
                                                <td>Doe</td>
                                                <td>jo</td>
                                                <td>Moe</td>
                                                <td>ma</td>
                                                <td>Mary</td>
                                            </tr>
                                            <tr>
                                                <td>Mary</td>
                                                <td>Moe</td>
                                                <td>mary</td>

                                                <td>Moe</td>
                                                <td>mar</td>
                                                <td>Mary</td>
                                            </tr>



                                        </tbody>
                                    </table>

                                </div>
                                <hr></hr>
                                <div className="box">
                                    <div class="d-flex justify-content-around">
                                        <div className="col-5 border">
                                            <p>160 loalty points</p>
                                            <p className="silver">SILVER CUSTUMER</p>
                                        </div>
                                        <div className='col-7 padding-top'>
                                            only <strong>40 points</strong> to become <strong>Gold Custumer</strong>
                                        </div>
                                    </div>

                                </div>
                                <div className="box">
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Online</option>
                                            <option>offline</option>

                                        </select>

                                    </div>
                                    <div>
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <td>Nguyễn Văn Hoài</td>
                                                    <td> <img width="5px" height="5px" src="https://cdn3.iconfinder.com/data/icons/flatastic-10-2/256/trafficlight_green-512.png" alt="" ></img> supervisor</td>
                                                    <td>Busy</td>

                                                </tr>
                                                <tr>
                                                    <td>Nguyễn Văn Hoài</td>
                                                    <td>  <img width="5px" height="5px" src="https://cdn3.iconfinder.com/data/icons/flatastic-10-2/256/trafficlight_green-512.png" alt="" ></img> supervisor</td>
                                                    <td>Busy</td>

                                                </tr>
                                                <tr>
                                                    <td>Nguyễn Văn Hoài</td>
                                                    <td>  <img width="5px" height="5px" src="https://cdn3.iconfinder.com/data/icons/flatastic-10-2/256/trafficlight_green-512.png" alt="" ></img> supervisor</td>
                                                    <td>Busy</td>

                                                </tr>
                                                <tr>
                                                    <td>Nguyễn Văn Hoài</td>
                                                    <td>  <img width="5px" height="5px" src="https://cdn3.iconfinder.com/data/icons/flatastic-10-2/256/trafficlight_green-512.png" alt="" ></img> supervisor</td>
                                                    <td>Busy</td>

                                                </tr>
                                                <tr>
                                                    <td>Nguyễn Văn Hoài</td>
                                                    <td> <img width="5px" height="5px" src="https://cdn3.iconfinder.com/data/icons/flatastic-10-2/256/trafficlight_green-512.png" alt="" ></img> supervisor</td>
                                                    <td>Busy</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <hr>
                                </hr>
                            </div>

                            <div className="col-8 bg-color" >
                                <div className="item" >
                                    <input class="search" placeholder="  Search" name="search" />

                                </div >
                                <div className="item" >
                                    <ul class="nav nav-tabs tab">
                                        <li class="active"><a data-toggle="tab" href="#hoe">Home</a></li>
                                        <li ><a data-toggle="tab" href="#men1">Menu 1</a></li>
                                        <li><a data-toggle="tab" href="#men2">Menu 2</a></li>
                                        <li><a data-toggle="tab" href="#men3">Menu 3</a></li>
                                    </ul>

                                    <div class="tab-content">
                                        <div id="hoe" class="tab-pane fade in active">
                                            <p> <span className="color-tone">Prepaid</span> | Postpaid</p>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Thông tin khách hàng</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>
                                                            <form class="form-inline"className="row">
                                                                <div class="form-group form-inline col-6 ">
                                                                    <label for="" className="col-6 label">tên khách hàng</label>
                                                                    <input type="text" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6 ">
                                                                    <label for="pwd" className="col-6 label">sdwsa</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                             
                                                                <div class="form-group form-inline col-6 " >
                                                                    <label for="email" className="col-6 label">giới tính</label>
                                                                    <input type="email" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6 ">
                                                                    <label for="pwd" className="col-6 label"> sxffxg </label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6 ">
                                                                    <label for="email" className="col-6 label ">  mã số thuế</label>
                                                                    <input type="email" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6 ">
                                                                    <label for="pwd" className="col-6 label">Password:</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6 " >
                                                                    <label for="pwd" className="col-6 label">chứng minh thư</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="email" className="col-6 label"> nơi cấp </label>
                                                                    <input type="email" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6 ">
                                                                    <label for="pwd" className="col-6 label">nơi cấp</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="email" className="col-6 label"> nơi cấp </label>
                                                                    <input type="email" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="pwd" className="col-6 label">mã khách hàng</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                            </form>
                                                            <hr></hr>
                                                            <p className="lienket"> <i class="far fa-caret-square-down"></i>liên kết tác động khách hàng</p>
                                                            <p className="bold">Lịch sử thông tin khách hàng</p>
                                                            < div className="box">
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr >
                                                                            <th>Firstname</th>
                                                                            <th>Lastname</th>
                                                                            <th>Email</th>
                                                                            <th>Lastname</th>
                                                                            <th>Email</th>
                                                                            <th>Email</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>John</td>
                                                                            <td>Doe</td>
                                                                            <td>john@example.com</td>
                                                                            <td>Moe</td>
                                                                            <td>mary@example.com</td>
                                                                            <td>Mary</td>
                                                                        </tr>


                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <br></br>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Thông tin thuê bao </th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td>
                                                            <form class="form-inline" action="/action_page.php" className="row">
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="" className="col-6 label">tên khách hàng</label>
                                                                    <input type="text" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="pwd" className="col-6 label">sdwsa</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="email" className="col-6 label">giới tính</label>
                                                                    <input type="email" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="pwd" className="col-6 label"> sxffxg </label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="email" className="col-6 label ">  mã số thuế</label>
                                                                    <input type="email" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="pwd" className="col-6 label">Password:</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6" >
                                                                    <label for="pwd" className="col-6 label">chứng minh thư</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="email" className="col-6 label"> nơi cấp </label>
                                                                    <input type="email" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="pwd" className="col-6 label">nơi cấp</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="email" className="col-6 label"> nơi cấp </label>
                                                                    <input type="email" class="form-control col-6" />
                                                                </div>
                                                                <div class="form-group form-inline col-6">
                                                                    <label for="pwd" className="col-6 label">mã khách hàng</label>
                                                                    <input type="password" class="form-control col-6" />
                                                                </div>
                                                            </form>
                                                            <hr></hr>
                                                            <p className="lienket"> <i class="far fa-caret-square-down"></i>liên kết tác động khách hàng</p>

                                                            <p className='bold'>Tra cứu các dịch vụ VAS</p>

                                                            <div class="form-group  ">
                                                                <div className=" d-flex flex-row justify-content-between option">
                                                                    <div className="col-9">
                                                                        <select class="form-control" id="sel1">
                                                                            <option>1</option>
                                                                            <option>2</option>


                                                                        </select></div>
                                                                    <div className="col-3 send"><button><i class="fas fa-paper-plane"></i> thực hiện </button></div>
                                                                </div>
                                                            </div>
                                                            <div className="box">
                                                                <ul class="nav nav-tabs">
                                                                    <li class="active"><a data-toggle="tab" href="#one">lịch sử thuê bao gọi đến </a></li>
                                                                    <li ><a data-toggle="tab" href="#two">lịch sử khiếu nại </a></li>
                                                                    <li ><a data-toggle="tab" href="#three"> khiếu nại bị trả lại</a></li>
                                                                </ul>

                                                                <div class="tab-content">
                                                                    <div id="one" class="tab-pane fade in active finalbox">
                                                                        <div class="form-group ">
                                                                            <div className=" d-flex flex-row justify-content-between">
                                                                            <div class="form-group form-inline forminline col-5">
                                                                                    <div className="col-3 date"> Từ Ngày </div> 
                                                                                    <div className="col-9">
                                                                                        <div class="form-control ">
                                                                                            <input type="text" className="border-none col-10" />
                                                                                        <i class="far fa-calendar-alt"></i></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group form-inline forminline col-5">
                                                                                <div className="col-3 date"> đến</div> 
                                                                                    <div className="col-9">
                                                                                        <div class="form-control ">
                                                                                            <input type="text" className="border-none col-10" />
                                                                                        <i class="far fa-calendar-alt"></i></div>
                                                                                    </div>
                                                                                </div>
                                                                                <button className=" thuchien col-2"> <i class="fas fa-search"></i> tìm kiếm  </button>
                                                                            </div>
                                                                        </div>
                                                                        <table class="table">
                                                                            <thead>
                                                                                <tr >
                                                                                    <th>STT</th>
                                                                                    <th>Ngày</th>
                                                                                    <th>Giờ</th>
                                                                                    <th>Nhân viên</th>
                                                                                    <th>Thuộc đơn vị </th>
                                                                                    <th>Thực hiện tác động </th>
                                                                                    <th> Lý do</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td>20/2/2015</td>
                                                                                    <td>02:00:05</td>
                                                                                    <td>Nguyễn Ngọc Linh</td>
                                                                                    <td>SP1</td>
                                                                                    <td>callout</td>
                                                                                    <td>khách hàng ...</td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>2</td>
                                                                                    <td>20/2/2015</td>
                                                                                    <td>02:00:05</td>
                                                                                    <td>Nguyễn Ngọc Linh</td>
                                                                                    <td>SP1</td>
                                                                                    <td>callout</td>
                                                                                    <td>khách hàng ...</td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>3</td>
                                                                                    <td>20/2/2015</td>
                                                                                    <td>02:00:05</td>
                                                                                    <td>Nguyễn Ngọc Linh</td>
                                                                                    <td>SP1</td>
                                                                                    <td>callout</td>
                                                                                    <td>khách hàng ...</td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>4</td>
                                                                                    <td>20/2/2015</td>
                                                                                    <td>02:00:05</td>
                                                                                    <td>Nguyễn Ngọc Linh</td>
                                                                                    <td>SP1</td>
                                                                                    <td>callout</td>
                                                                                    <td>khách hàng ...</td>
                                                                                </tr>



                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div id="two" class="tab-pane fade">
                                                                        <h3>Menu 1</h3>
                                                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                                    </div>
                                                                    <div id="three" class="tab-pane fade">
                                                                        <h3>Menu 2</h3>
                                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                                <br></br>

                                <p className="copy">copyright <i class="far fa-copyright"> Viettel</i></p>
                            </div>

                        </div>
                    </div>
                </div>


            </div >





        );
    }
}
export default Page2;