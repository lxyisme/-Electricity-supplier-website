;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-bangzhu" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M895.8893 317.4907c-22.011-52.0407-53.5179-98.774-93.6463-138.9018-40.1274-40.1268-86.8627-71.6334-138.9055-93.6435-53.8907-22.7925-111.1282-34.3487-170.1216-34.3487-58.9934 0-116.231 11.5562-170.1216 34.3487-52.0438 22.0101-98.7791 53.5167-138.9065 93.6435-40.1284 40.1268-71.6354 86.8601-93.6463 138.9018-22.7915 53.8885-34.3481 111.1227-34.3481 170.1117 0 58.99 11.5566 116.2232 34.3481 170.1127 22.011 52.0417 53.5179 98.776 93.6463 138.9038 40.1284 40.1278 86.8637 71.6354 138.9065 93.6465 53.8917 22.7935 111.1282 34.3497 170.1216 34.3497 58.9934 0 116.231-11.5562 170.1216-34.3497 52.0428-22.0111 98.7781-53.5187 138.9065-93.6465 40.1274-40.1278 71.6344-86.8621 93.6453-138.9038 22.7925-53.8895 34.3481-111.1227 34.3481-170.1127C930.2384 428.6134 918.6818 371.3792 895.8893 317.4907zM493.2158 886.9237c-220.1917 0-399.3296-179.1345-399.3296-399.3213 0-220.1827 179.1389-399.3133 399.3296-399.3133s399.3286 179.1315 399.3286 399.3133C892.5454 707.7891 713.4076 886.9237 493.2158 886.9237zM524.256 650.8817h-69.1439553004736c-2.9741 0-5.3846 2.4104-5.3846 5.3853v68.76737571926233c0 2.975 2.4115 5.3853 5.3846 5.3853h69.1439553004736c2.9751 0 5.3846-2.4104 5.3846-5.3853v-68.76737571926233C529.6406 653.2921 527.2312 650.8817 524.256 650.8817zM608.5174 257.3405c-30.0289-26.0453-69.8205-39.2524-118.2717-39.2524-45.7459 0-84.1044 13.4059-114.0114 39.846-29.9649 26.492-47.106 62.7784-50.9465 107.8509-0.1279 1.502 0.3798 2.989 1.3991 4.0992 1.0204 1.1102 2.4584 1.7418 3.9665 1.7418h65.40633616386361c2.6603 0 4.9219-1.9417 5.3236-4.5719 9.0852-59.5436 38.3975-88.489 89.6109-88.489 26.0574 0 47.2959 7.9036 63.1228 23.4911 16.0208 15.7903 23.8098 35.441 23.8098 60.0753 0 12.2557-2.9351 24.0497-8.7234 35.0522-5.8823 11.1714-21.6712 27.6702-46.9291 49.0398-26.3662 22.3079-44.7405 43.7623-54.6112 63.7678-10.0566 20.3712-14.9455 51.1024-14.9455 93.9513 0 2.974 2.4115 5.3843 5.3846 5.3843h59.05238363162666c2.9741 0 5.3846-2.4104 5.3846-5.3843 0-30.7152 2.9791-52.7822 8.8554-65.5915 5.8503-12.7623 22.4577-30.4783 49.3616-52.6543 28.0821-23.1483 47.5207-44.7646 57.7762-64.2484 10.3324-19.6317 15.5701-41.0971 15.5701-63.8017C654.1023 317.3308 638.7661 283.5827 608.5174 257.3405z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128.007168 295.315456l769.184768 0c12.493824 0 22.623232-10.128384 22.623232-22.623232s-10.129408-22.623232-22.623232-22.623232L128.007168 250.068992c-12.494848 0-22.623232 10.128384-22.623232 22.623232S115.513344 295.315456 128.007168 295.315456z"  ></path>' +
    '' +
    '<path d="M897.19296 487.612416 128.007168 487.612416c-12.494848 0-22.623232 10.128384-22.623232 22.623232s10.128384 22.623232 22.623232 22.623232l769.184768 0c12.493824 0 22.623232-10.128384 22.623232-22.623232S909.686784 487.612416 897.19296 487.612416z"  ></path>' +
    '' +
    '<path d="M897.19296 725.153792 128.007168 725.153792c-12.494848 0-22.623232 10.129408-22.623232 22.623232s10.128384 22.623232 22.623232 22.623232l769.184768 0c12.493824 0 22.623232-10.129408 22.623232-22.623232S909.686784 725.153792 897.19296 725.153792z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-you" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M757.76 419.84 696.32 358.4 512 542.72 327.68 358.4 266.24 419.84 450.56 604.16 450.56 604.16 512 665.6 573.44 604.16 573.44 604.16Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M760.672616 62.534242 263.326361 62.534242c-19.780509 0-35.815717 15.783475-35.815717 35.253922l0 828.422649c0 19.470447 16.035208 35.253922 35.815717 35.253922l497.346255 0c19.780509 0 35.815717-15.783475 35.815717-35.253922L796.488333 97.788164C796.488333 78.31874 780.453125 62.534242 760.672616 62.534242zM482.069317 111.140263l59.860343 0c11.019984 0 19.953448 8.933463 19.953448 19.953448 0 11.019984-8.933463 19.953448-19.953448 19.953448l-59.860343 0c-11.019984 0-19.953448-8.933463-19.953448-19.953448C462.115869 120.073726 471.049333 111.140263 482.069317 111.140263zM551.906895 918.487921l-79.81379 0L472.093105 838.674131l79.81379 0L551.906895 918.487921zM736.092801 779.502473c0 19.780509-16.035208 35.815717-35.815717 35.815717L323.722916 815.31819c-19.780509 0-35.815717-16.035208-35.815717-35.815717L287.907199 209.552643c0-19.780509 16.035208-35.815717 35.815717-35.815717l376.554168 0c19.780509 0 35.815717 16.035208 35.815717 35.815717L736.092801 779.502473z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M515.97401 908.939451c-7.814989 0-15.626909-2.963495-21.611204-8.895601-2.51631-2.493797-252.522294-250.338558-334.080821-334.084914-64.034409-65.74947-95.526657-134.024459-93.604888-202.926736 2.400676-86.025259 57.105602-141.42194 64.846914-148.838863 60.150962-61.915142 129.21185-93.305059 205.28034-93.305059 76.795037 0 140.457985 32.689517 172.407652 52.843532 45.51359-38.692231 97.567129-58.273195 155.073868-58.273195 107.505479 0 194.772009 69.858044 199.517079 73.724095 54.029544 43.648103 83.73203 96.291067 88.281649 156.467611 3.188622 42.173518-6.193049 86.559425-27.884071 131.922588-21.024849 43.968397-47.725978 76.30385-61.770855 91.665723C784.317641 654.66628 547.654546 890.033869 537.616936 900.011104 531.630594 905.96163 523.801279 908.939451 515.97401 908.939451zM173.941076 258.582313c-1.864464 1.792832-44.503587 43.61024-45.910633 107.003036-1.140986 51.41909 24.508183 104.421234 76.236312 157.535943 67.029626 68.826552 248.864998 249.504564 311.659159 311.828005 61.594847-61.45363 237.688447-237.691517 301.18869-307.142286 38.920428-42.567491 78.732156-111.558795 73.744561-177.528276-3.223415-42.641169-25.329898-80.790024-65.704444-113.38642-0.054235-0.042979-0.107447-0.086981-0.161682-0.130983-0.687662-0.556679-74.832336-59.904345-160.708192-59.904345-48.684816 0-92.576465 19.424398-130.455167 57.733912-11.078313 11.20418-28.842909 12.202926-41.105187 2.308579-0.620124-0.494257-69.465095-54.612829-155.920142-54.612829-59.002812 0-113.38642 25.266453-161.638377 75.098395C174.688089 257.877255 174.430216 258.140245 173.941076 258.582313z"  ></path>' +
    '' +
    '<path d="M800.831756 314.308499"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M825.216 753.92c-45.504 0-82.304 36.928-82.304 82.368 0 45.504 36.8 82.304 82.304 82.304 45.568 0 82.432-36.8 82.432-82.304C907.648 790.848 870.72 753.92 825.216 753.92zM413.376 753.92c-45.504 0-82.368 36.928-82.368 82.368 0 45.504 36.864 82.304 82.368 82.304 45.44 0 82.368-36.8 82.368-82.304C495.744 790.848 458.816 753.92 413.376 753.92zM269.504 215.232 159.744 105.344c0 0-80.576 0-126.784 0-46.144 0-41.6 82.432 0 82.432 41.472 0 99.392 0 99.392 0l82.368 82.304 143.808 428.864 549.184 0L1024 215.232 269.504 215.232z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingdan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M676.932911 862.715687 347.020016 862.715687c-45.436842 0-77.30976-3.742231-95.792717-22.372543-20.032242-20.190855-19.791765-50.519604-19.392676-100.767008 0.062422-7.833409 0.12689-15.934924 0.12689-24.708751L231.961514 309.006749c0-8.795317-0.064468-16.912182-0.12689-24.762987-0.398066-50.212612-0.638543-80.520895 19.338441-100.655468 18.506493-18.653849 49.157583-22.302959 95.847975-22.302959l329.911872 0c46.77942 0 77.480652 3.648087 95.973842 22.296819 19.916609 20.082384 19.665899 50.230008 19.25146 100.175537-0.066515 7.998161-0.1361 16.268522-0.1361 25.249057l0 405.860634c0 8.956999 0.068562 17.210987 0.135076 25.192775 0.416486 49.981345 0.668219 80.148411-19.303648 100.288101C754.301 859.05532 723.633536 862.715687 676.932911 862.715687zM347.020016 195.347107c-41.72838 0-63.162552 3.65832-71.66725 12.231579-9.983375 10.063193-9.774621 36.452213-9.458419 76.395948 0.062422 7.916297 0.127913 16.102746 0.127913 25.03314l0 405.860634c0 8.90788-0.064468 17.077957-0.127913 24.978904-0.317225 39.97648-0.527003 66.38699 9.512654 76.507488 8.553817 8.622378 29.970592 12.301164 71.611991 12.301164l329.911872 0c41.738613 0 63.192228-3.675716 71.735811-12.289907 9.978259-10.063193 9.759271-36.302811 9.428743-76.020394-0.066515-8.051373-0.1361-16.378016-0.1361-25.476231L757.95932 309.006749c0-9.121751 0.068562-17.463744 0.1361-25.532513 0.330528-39.684838 0.548492-65.901942-9.374508-75.90783-8.494465-8.566096-29.964452-12.220323-71.789023-12.220323L347.020016 195.346083z"  ></path>' +
    '' +
    '<path d="M358.210893 283.871279l220.430388 0 0 34.060747-220.430388 0 0-34.060747Z"  ></path>' +
    '' +
    '<path d="M358.210893 411.873582l302.513872 0 0 34.060747-302.513872 0 0-34.060747Z"  ></path>' +
    '' +
    '<path d="M358.210893 553.835827l302.513872 0 0 34.060747-302.513872 0 0-34.060747Z"  ></path>' +
    '' +
    '<path d="M358.210893 689.679725l302.513872 0 0 34.060747-302.513872 0 0-34.060747Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinfeng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M527.246927 204.247427c113.891476 0 227.88528 0.716299 341.776756-0.306985 60.373738-0.511642 88.923354 25.479764 88.309383 87.490756-1.432597 139.473569 0.409313 278.947137-0.818627 418.420706-0.716299 78.178875-31.926451 107.240132-111.333267 107.34246-218.573399 0.306985-437.044469 0.306985-655.617867-0.204657C111.896073 816.78505 64.722694 770.225642 64.313381 693.377036c-0.716299-125.55691-0.511642-251.11382-0.204657-376.568402C64.313381 235.355251 94.397921 204.963725 178.511842 204.145098c116.245028-1.125612 232.490057-0.306985 348.735085-0.306985C527.246927 203.940442 527.246927 204.145098 527.246927 204.247427zM518.037374 762.857999c109.286699 0 218.675727-1.330269 327.962426 0.61397 41.44299 0.716299 58.224843-12.381733 57.303887-55.666633-2.251224-104.579594-0.306985-209.363845-1.330269-314.045768-0.102328-17.088838 9.41421-40.624363-12.484061-49.833916-19.954032-8.390926-32.64275 10.130509-47.07105 21.693614-96.904967 77.360248-195.651844 152.5716-291.021885 231.773758-31.517138 26.196063-51.573499 25.275107-82.27201-0.102328-97.109623-80.532427-197.084441-157.483362-295.012691-237.094834-13.098031-10.64215-25.377436-23.740182-41.647647-19.135405-21.079644 6.037374-13.20036 27.219346-13.302688 42.05696-0.716299 99.974818 1.330269 200.051964-0.716299 300.026781-1.125612 56.48526 23.535525 80.327771 78.690517 79.816129C303.966424 762.141701 411.001899 762.755671 518.037374 762.857999zM139.524733 262.676926c19.851704 18.316778 25.991406 24.763466 32.949735 30.289198 60.88538 48.298991 121.259119 97.211952 182.860797 144.38533C515.172179 559.838513 515.581493 559.838513 672.041571 435.202558c66.411112-52.903767 131.491956-107.34246 211.205756-172.62796C627.835715 262.676926 392.68512 262.676926 139.524733 262.676926z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M994.372267 272.9984c-21.674667 45.8752-117.3504 266.786133-130.389333 287.232-1.536 2.423467-2.935467 4.8128-4.266667 7.0656-12.6976 21.777067-26.112 38.434133-72.465067 38.434133L345.4976 605.730133c9.284267 28.125867 28.535467 62.839467 68.642133 62.839467l382.429867 0c11.332267 0 20.48 9.181867 20.48 20.48 0 11.298133-9.147733 20.48-20.48 20.48L414.139733 709.5296c-56.763733 0-98.167467-44.4416-113.664-112.5376-8.533333-37.546667-112.0256-383.8976-119.432533-411.0336-7.953067-17.237333-26.4192-29.627733-44.373333-29.627733L42.496 156.330667c-11.298133 0-20.48-9.181867-20.48-20.48 0-11.298133 9.181867-20.445867 20.48-20.445867l94.173867 0c35.1232 0 68.266667 1.877333 82.5344 35.157333 0.375467 0.887467 0.682667 1.7408 0.955733 2.696533 4.061867 14.882133 89.873067 319.1808 114.346667 411.5456l452.744533 0c26.555733 0 29.218133-4.539733 37.102933-18.1248 1.604267-2.730667 3.242667-5.5296 5.085867-8.430933 12.151467-19.080533 107.1104-238.6944 127.351467-281.3952 8.430933-22.084267 6.894933-34.0992 4.573867-37.512533-1.536-2.184533-6.417067-3.515733-13.1072-3.515733-44.373333 0.648533-606.685867 0.034133-626.210133 0-11.332267-0.034133-20.48-9.181867-20.445867-20.48 0.034133-11.332267 9.181867-20.445867 20.48-20.445867l0.034133 0c4.8128 0 581.5296 0.682667 625.8688 0 26.965333 0 40.516267 11.5712 47.172267 21.2992C1007.4112 214.050133 1007.138133 239.9232 994.372267 272.9984zM403.285333 729.838933c52.736 0 95.6416 42.9056 95.6416 95.6416 0 52.736-42.9056 95.675733-95.6416 95.675733s-95.6416-42.939733-95.6416-95.675733C307.677867 772.778667 350.549333 729.838933 403.285333 729.838933zM403.285333 881.8688c31.061333 0 56.32-25.2928 56.32-56.354133 0-31.061333-25.258667-56.32-56.32-56.32-31.0272 0-56.285867 25.258667-56.285867 56.32C346.999467 856.576 372.258133 881.8688 403.285333 881.8688z"  ></path>' +
    '' +
    '<path d="M792.405333 729.838933c52.736 0 95.6416 42.9056 95.6416 95.6416 0 52.736-42.9056 95.675733-95.6416 95.675733-52.736 0-95.6416-42.939733-95.6416-95.675733C696.797867 772.778667 739.669333 729.838933 792.405333 729.838933zM792.405333 881.8688c31.061333 0 56.32-25.2928 56.32-56.354133 0-31.061333-25.258667-56.32-56.32-56.32-31.0272 0-56.285867 25.258667-56.285867 56.32C736.119467 856.576 761.378133 881.8688 792.405333 881.8688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)