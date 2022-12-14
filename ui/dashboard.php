<?php 
include_once 'router.php';
$___page = 'dashboard';
include_once 'API/Logic/identity-management.php';
include_once 'access-control-FE.php';
$business_name = $___business->name;
?>
<!doctype html>
<html lang="en">
 
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Business Stats (Dashboard) | Arraund Business</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/arraund-business/assets/vendor/bootstrap/css/bootstrap.min.css">
    <link href="/arraund-business/assets/vendor/fonts/circular-std/style.css" rel="stylesheet">
    <link rel="stylesheet" href="/arraund-business/assets/libs/css/style.css">
    <link rel="stylesheet" href="/arraund-business/assets/vendor/fonts/fontawesome/css/fontawesome-all.css">
        <script src="/arraund-business/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
<link rel="apple-touch-icon" sizes="180x180" href="/arraund-business/assets/images/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/arraund-business/assets/images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/arraund-business/assets/images/favicon-16x16.png">
<link rel="manifest" href="/arraund-business/assets/images/site.webmanifest">
</head>

<body>
    <!-- ============================================================== -->
    <!-- main wrapper -->
    <!-- ============================================================== -->
    <div class="dashboard-main-wrapper">
        <!-- ============================================================== -->
        <!-- navbar -->
        <!-- ============================================================== -->
        <div class="dashboard-header">
            <nav class="navbar navbar-expand-lg bg-white fixed-top">
                <a href="/arraund-business/dashboard"><b style="color: rgb(0,33,115); font-size: 25px; text-align; margin-left: 7px;">a<b style="color: orange;">rraund</b> business</b></a>
            </nav>
        </div>
        <!-- ============================================================== -->
        <!-- end navbar -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- left sidebar -->
        <!-- ============================================================== -->
        <style type="text/css">
            .white-text
            {
                color: white !important;
            }
        </style>
       <div class="nav-left-sidebar sidebar-dark">
            <div class="menu-list">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="d-xl-none d-lg-none">Dashboard</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav flex-column">
                            <li class="nav-divider">
                                Menu
                            </li>
                              <li class="nav-item">
                                <a class="nav-link white-text active" href="/arraund-business/dashboard"><i class="fas fa-chart-bar"></i> Business Stats</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/wallet/details"><i class="fa fa-money-bill-alt"></i> Wallet</a>
                            </li>                            <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/create-product"><i class="fas fa-plus"></i> Add Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/products"><i class="fa fa-eye"></i> See Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/create-service"><i class="fas fa-plus"></i> Add Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/services"><i class="fa fa-eye"></i> See Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/orders"><i class="fa fa-eye"></i> See Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/edit-details"><i class="fas fa-edit"></i> Edit Business Details</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/template-select"><i class="fas fa-globe"></i> Select Business Template</a>
                            </li>
                              <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/notifications"><i class="fas fa-bell"></i> Notifications</a>
                            </li>
                               <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/help"><i class="fas fa-question-circle"></i> Help</a>
                              <li class="nav-item">
                                <a class="nav-link white-text" href="/arraund-business/account-settings"><i class="fas fa-cog"></i> Settings</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- end left sidebar -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- wrapper  -->
        <!-- ============================================================== -->
        <div class="dashboard-wrapper">
            <div class="container-fluid dashboard-content">
                        <!-- ============================================================== -->
                        <!-- pageheader -->
                        <!-- ============================================================== -->
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="page-header">
                                    <h2 class="pageheader-title">Welcome <?php echo $business_name; ?></h2>
                                    <div class="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><a class="breadcrumb-link">Dashboard</a></li>
                                                <li class="breadcrumb-item active" aria-current="page">Business Stats</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ============================================================== -->
                        <!-- end pageheader -->
                        <!-- ============================================================== -->
                            <div style="text-align: center;"><h2>Financial</h2></div>
                            <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="/arraund-business/wallet/details"><h5 class="text-muted">Wallet Balance</h5></a>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1 wb-d0">&#8358;</h1>
                                        </div>
                                    </div>
                                    <canvas id="wallet-balance"></canvas>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="text-muted">Total Amount Earned</h5>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1 ae-d0">&#8358;</h1>
                                        </div>
                                       <!--  <div class="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span><i class="fa fa-fw fa-arrow-up"></i></span><span>5.86%</span>
                                        </div> -->
                                    </div>
                                    <canvas id="amount-earned"></canvas>
                                </div>
                            </div>
                        </div>
                            <div style="text-align: center;"><h2>Orders</h2></div>
                        <div class="row">
                            <div class="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="text-muted">Number of orders</h5>
                                    </div>
                                    <canvas id="orders-can"></canvas>
                                </div>
                            </div>
                            
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="text-muted">Order Delivery</h5>
                                    </div>
                                    <canvas id="order-delivery-metrics"></canvas>
                                </div>
                            </div>
                        </div>

                        <div style="text-align: center;"><h2>Reach</h2></div>
                         <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Business Page Visits (<b class="bpv-tN"></b>)</h5>
                                <div class="card-body">
                                </div>
                                <div class="card-body bg-light p-t-40 p-b-40">
                                   <canvas id="business-page-visits-distribution"></canvas>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Business Impressions (<b class="b-im0-tN"></b>)</h5>
                                <div class="card-body">
                                </div>
                                <div class="card-body text-center bg-light p-t-40 p-b-40">
                                   <canvas id="business-impressions"></canvas>
                                </div>
                            </div>
                        </div>
                                   <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Number of Products (<b class="np-tN"></b>)</h5>
                                <div class="card-body">
                                </div>
                                <div class="card-body bg-light p-t-40 p-b-40">
                                   <canvas id="business-page-products-total-number-distribution"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Product Impressions (<b class="p-im0-tN"></b>)</h5>
                                <div class="card-body">
                                </div>
                                <div class="card-body bg-light p-t-40 p-b-40">
                                   <canvas id="products-impressions-distribution"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Number of Services (<b class="ns-tN"></b>)</h5>
                                <div class="card-body">
                                </div>
                                <div class="card-body bg-light p-b-40 p-t-40">
                                    <canvas id="services-total-number-distribution"></canvas>
                                </div>
                            </div>
                        </div>
                   
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card">
                                <h5 class="card-header">Service Impressions (<b class="s-im0-tN"></b>)</h5>
                                <div class="card-body">
                                </div>
                                <div class="card-body bg-light p-b-40 p-t-40">
                                    <canvas id="services-impressions-distribution"></canvas>
                                </div>
                            </div>
                        </div>
                   
                       
                    </div>
            </div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- end main wrapper -->
    <!-- ============================================================== -->
    <!-- Optional JavaScript -->
    <script src="/arraund-business/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <!-- sparkline js -->
    <script src="/arraund-business/assets/libs/js/main-js.js"></script>

                 <script src="/arraund-business/assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js" integrity="sha512-Wt1bJGtlnMtGP0dqNFH1xlkLBNpEodaiQ8ZN5JLA5wpc1sUlk/O5uuOMNgvzddzkpvZ9GLyYNa8w2s7rqiTk5Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.js" integrity="sha512-b3xr4frvDIeyC3gqR1/iOi6T+m3pLlQyXNuvn5FiRrrKiMUJK3du2QqZbCywH6JxS5EOfW0DY0M6WwdXFbCBLQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/arraund-business/controllers/dashboard.js?no_cache=<?php echo generate_UUID(); ?>"></script>
    <script src="/arraund-business/controllers/chart-configurations.js?no_cache=<?php echo generate_UUID(); ?>"></script>

</body>
 
</html>