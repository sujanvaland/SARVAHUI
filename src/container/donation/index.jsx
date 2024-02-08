import React from "react";
import { Input, Select } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Donate=()=>{
const { Option } = Select;

    return(
        <>
        <div>
        <div>
           
            <div>
                
                <Link to="/">Login</Link>
            </div>
        </div>
        <div>
            <div>
                <img alt="" src="" />
            </div>
            <div>
                <h1>Become a sponsor</h1>
                <p>Thank you for the interest in becoming a sponsor of the Mastodon project! To proceed, choose a
                    sponsorship tier and enter your billing details. Payments are handled by Stripe.</p>
            </div>
        </div>
        <div>
            New links on joinmastodon.org are added manually. We reserve the right to reject sponsorships if we believe
            the association could harm our brand. If you are not sure if your link will be accepted, reach out to
            sponsorships@joinmastodon.org
        </div>
       
            <div>
                <div>
                    <div><span>Monthly</span>
                            <div>
                                <Input type="checkbox"/>
                            </div><span>Yearly (10% off)</span>
                        </div>
                    <div>
                        <div role="button">
                            <h5>Rosegold tier</h5>
                            <p>Sold out</p>
                            <img src="https://sponsor.joinmastodon.org/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--685feca86e1cc18f5d36de0a350841a2225f771a/silver.png"
                                alt=""/>
                            <ul>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>Your medium-sized logo</li>
                                <li ><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024"
                                        rotate="0"/>
                                    Do-follow link</li>
                                <li ><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024"
                                        rotate="0"/>
                                    On our documentation</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                     On the sponsors page</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    On the frontpage</li>
                            </ul>
                        </div>
                        <div role="button">
                            <h5>Gold tier</h5>
                            <p><span>$200</span> per month</p>
                            <img src="https://sponsor.joinmastodon.org/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e8f4d29ba7acef6ba3db0cffda3bbe42b6c95077/gold.png"
                                alt="" />
                            <ul>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    Your medium-sized logo</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    Do-follow link</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    On our documentation</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    On the sponsors page</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    On the frontpage</li>
                            </ul>
                        </div>
                        <div role="button">
                            <h5>Platinum tier</h5>
                            <p><span>$500</span> per month</p>
                            <img src="https://sponsor.joinmastodon.org/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--986f0744704a9779310b33dc7546c03c9df8e3db/platinum.png"
                                alt="" />
                            <ul>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    Your medium-sized logo</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    Do-follow link</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    On our documentation</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    On the sponsors page</li>
                                <li><svg fill="#000000" width="16" height="16" viewBox="0 0 1024 1024" rotate="0"/>
                                    On the frontpage</li>
                            </ul>
                        </div>
                    </div>
                    <p>All prices are in US dollars and are tax-exclusive</p><input type="hidden"
                        name="sponsor[plan_id]" value="7"/>
                </div>
            </div>
            <h4>Billing details</h4>
            <div>
                <div>
                    <div>Email address
                            <abbr title="required">*</abbr>
                        <div><input type="email" value="" name="sponsor[email]" id="sponsor_email" /></div>
                    </div><span>Login details will be sent to this e-mail address so make sure it&apos;s
                        correct</span>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                        ZIP or postal code <abbr title="required">*</abbr>
                            <div><input type="text" value="" name="sponsor[address_postal_code]"
                                    id="sponsor_address_postal_code"/></div>
                        </div>
                    </div>
                    <div>
                        <div>Country
                                <abbr title="required">*</abbr>
                            <div><Select  name="sponsor[address_country]"
                                    id="sponsor_address_country" placeholder="Select Country">
                                    <Option value="AF">Afghanistan</Option>
                                    <Option value="AX">Åland Islands</Option>
                                    <Option value="AL">Albania</Option>
                                    <Option value="DZ">Algeria</Option>
                                    <Option value="AS">American Samoa</Option>
                                    <Option value="AD">Andorra</Option>
                                    <Option value="AO">Angola</Option>
                                    <Option value="AI">Anguilla</Option>
                                    <Option value="AQ">Antarctica</Option>
                                    <Option value="AG">Antigua and Barbuda</Option>
                                    <Option value="AR">Argentina</Option>
                                    <Option value="AM">Armenia</Option>
                                    <Option value="AW">Aruba</Option>
                                    <Option value="AU">Australia</Option>
                                    <Option value="AT">Austria</Option>
                                    <Option value="AZ">Azerbaijan</Option>
                                    <Option value="BS">Bahamas</Option>
                                    <Option value="BH">Bahrain</Option>
                                    <Option value="BD">Bangladesh</Option>
                                    <Option value="BB">Barbados</Option>
                                    <Option value="BY">Belarus</Option>
                                    <Option value="BE">Belgium</Option>
                                    <Option value="BZ">Belize</Option>
                                    <Option value="BJ">Benin</Option>
                                    <Option value="BM">Bermuda</Option>
                                    <Option value="BT">Bhutan</Option>
                                    <Option value="BO">Bolivia</Option>
                                    <Option value="BQ">Bonaire, Sint Eustatius and Saba</Option>
                                    <Option value="BA">Bosnia and Herzegovina</Option>
                                    <Option value="BW">Botswana</Option>
                                    <Option value="BV">Bouvet Island</Option>
                                    <Option value="BR">Brazil</Option>
                                    <Option value="IO">British Indian Ocean Territory</Option>
                                    <Option value="BN">Brunei Darussalam</Option>
                                    <Option value="BG">Bulgaria</Option>
                                    <Option value="BF">Burkina Faso</Option>
                                    <Option value="BI">Burundi</Option>
                                    <Option value="CV">Cabo Verde</Option>
                                    <Option value="KH">Cambodia</Option>
                                    <Option value="CM">Cameroon</Option>
                                    <Option value="CA">Canada</Option>
                                    <Option value="KY">Cayman Islands</Option>
                                    <Option value="CF">Central African Republic</Option>
                                    <Option value="TD">Chad</Option>
                                    <Option value="CL">Chile</Option>
                                    <Option value="CN">China</Option>
                                    <Option value="CX">Christmas Island</Option>
                                    <Option value="CC">Cocos (Keeling) Islands</Option>
                                    <Option value="CO">Colombia</Option>
                                    <Option value="KM">Comoros</Option>
                                    <Option value="CG">Congo</Option>
                                    <Option value="CD">Congo, The Democratic Republic of the</Option>
                                    <Option value="CK">Cook Islands</Option>
                                    <Option value="CR">Costa Rica</Option>
                                    <Option value="CI">Côte d&apos;Ivoire</Option>
                                    <Option value="HR">Croatia</Option>
                                    <Option value="CU">Cuba</Option>
                                    <Option value="CW">Curaçao</Option>
                                    <Option value="CY">Cyprus</Option>
                                    <Option value="CZ">Czechia</Option>
                                    <Option value="DK">Denmark</Option>
                                    <Option value="DJ">Djibouti</Option>
                                    <Option value="DM">Dominica</Option>
                                    <Option value="DO">Dominican Republic</Option>
                                    <Option value="EC">Ecuador</Option>
                                    <Option value="EG">Egypt</Option>
                                    <Option value="SV">El Salvador</Option>
                                    <Option value="GQ">Equatorial Guinea</Option>
                                    <Option value="ER">Eritrea</Option>
                                    <Option value="EE">Estonia</Option>
                                    <Option value="SZ">Eswatini</Option>
                                    <Option value="ET">Ethiopia</Option>
                                    <Option value="FK">Falkland Islands (Malvinas)</Option>
                                    <Option value="FO">Faroe Islands</Option>
                                    <Option value="FJ">Fiji</Option>
                                    <Option value="FI">Finland</Option>
                                    <Option value="FR">France</Option>
                                    <Option value="GF">French Guiana</Option>
                                    <Option value="PF">French Polynesia</Option>
                                    <Option value="TF">French Southern Territories</Option>
                                    <Option value="GA">Gabon</Option>
                                    <Option value="GM">Gambia</Option>
                                    <Option value="GE">Georgia</Option>
                                    <Option value="DE">Germany</Option>
                                    <Option value="GH">Ghana</Option>
                                    <Option value="GI">Gibraltar</Option>
                                    <Option value="GR">Greece</Option>
                                    <Option value="GL">Greenland</Option>
                                    <Option value="GD">Grenada</Option>
                                    <Option value="GP">Guadeloupe</Option>
                                    <Option value="GU">Guam</Option>
                                    <Option value="GT">Guatemala</Option>
                                    <Option value="GG">Guernsey</Option>
                                    <Option value="GN">Guinea</Option>
                                    <Option value="GW">Guinea-Bissau</Option>
                                    <Option value="GY">Guyana</Option>
                                    <Option value="HT">Haiti</Option>
                                    <Option value="HM">Heard Island and McDonald Islands</Option>
                                    <Option value="VA">Holy See (Vatican City State)</Option>
                                    <Option value="HN">Honduras</Option>
                                    <Option value="HK">Hong Kong</Option>
                                    <Option value="HU">Hungary</Option>
                                    <Option value="IS">Iceland</Option>
                                    <Option value="IN">India</Option>
                                    <Option value="ID">Indonesia</Option>
                                    <Option value="IR">Iran, Islamic Republic of</Option>
                                    <Option value="IQ">Iraq</Option>
                                    <Option value="IE">Ireland</Option>
                                    <Option value="IM">Isle of Man</Option>
                                    <Option value="IL">Israel</Option>
                                    <Option value="IT">Italy</Option>
                                    <Option value="JM">Jamaica</Option>
                                    <Option value="JP">Japan</Option>
                                    <Option value="JE">Jersey</Option>
                                    <Option value="JO">Jordan</Option>
                                    <Option value="KZ">Kazakhstan</Option>
                                    <Option value="KE">Kenya</Option>
                                    <Option value="KI">Kiribati</Option>
                                    <Option value="KW">Kuwait</Option>
                                    <Option value="KG">Kyrgyzstan</Option>
                                    <Option value="LA">Lao People&apos;s Democratic Republic</Option>
                                    <Option value="LV">Latvia</Option>
                                    <Option value="LB">Lebanon</Option>
                                    <Option value="LS">Lesotho</Option>
                                    <Option value="LR">Liberia</Option>
                                    <Option value="LY">Libya</Option>
                                    <Option value="LI">Liechtenstein</Option>
                                    <Option value="LT">Lithuania</Option>
                                    <Option value="LU">Luxembourg</Option>
                                    <Option value="MO">Macao</Option>
                                    <Option value="MG">Madagascar</Option>
                                    <Option value="MW">Malawi</Option>
                                    <Option value="MY">Malaysia</Option>
                                    <Option value="MV">Maldives</Option>
                                    <Option value="ML">Mali</Option>
                                    <Option value="MT">Malta</Option>
                                    <Option value="MH">Marshall Islands</Option>
                                    <Option value="MQ">Martinique</Option>
                                    <Option value="MR">Mauritania</Option>
                                    <Option value="MU">Mauritius</Option>
                                    <Option value="YT">Mayotte</Option>
                                    <Option value="MX">Mexico</Option>
                                    <Option value="FM">Micronesia, Federated States of</Option>
                                    <Option value="MD">Moldova</Option>
                                    <Option value="MC">Monaco</Option>
                                    <Option value="MN">Mongolia</Option>
                                    <Option value="ME">Montenegro</Option>
                                    <Option value="MS">Montserrat</Option>
                                    <Option value="MA">Morocco</Option>
                                    <Option value="MZ">Mozambique</Option>
                                    <Option value="MM">Myanmar</Option>
                                    <Option value="NA">Namibia</Option>
                                    <Option value="NR">Nauru</Option>
                                    <Option value="NP">Nepal</Option>
                                    <Option value="NL">Netherlands</Option>
                                    <Option value="NC">New Caledonia</Option>
                                    <Option value="NZ">New Zealand</Option>
                                    <Option value="NI">Nicaragua</Option>
                                    <Option value="NE">Niger</Option>
                                    <Option value="NG">Nigeria</Option>
                                    <Option value="NU">Niue</Option>
                                    <Option value="NF">Norfolk Island</Option>
                                    <Option value="KP">North Korea</Option>
                                    <Option value="MK">North Macedonia</Option>
                                    <Option value="MP">Northern Mariana Islands</Option>
                                    <Option value="NO">Norway</Option>
                                    <Option value="OM">Oman</Option>
                                    <Option value="PK">Pakistan</Option>
                                    <Option value="PW">Palau</Option>
                                    <Option value="PS">Palestine, State of</Option>
                                    <Option value="PA">Panama</Option>
                                    <Option value="PG">Papua New Guinea</Option>
                                    <Option value="PY">Paraguay</Option>
                                    <Option value="PE">Peru</Option>
                                    <Option value="PH">Philippines</Option>
                                    <Option value="PN">Pitcairn</Option>
                                    <Option value="PL">Poland</Option>
                                    <Option value="PT">Portugal</Option>
                                    <Option value="PR">Puerto Rico</Option>
                                    <Option value="QA">Qatar</Option>
                                    <Option value="RE">Réunion</Option>
                                    <Option value="RO">Romania</Option>
                                    <Option value="RU">Russian Federation</Option>
                                    <Option value="RW">Rwanda</Option>
                                    <Option value="BL">Saint Barthélemy</Option>
                                    <Option value="SH">Saint Helena, Ascension and Tristan da Cunha</Option>
                                    <Option value="KN">Saint Kitts and Nevis</Option>
                                    <Option value="LC">Saint Lucia</Option>
                                    <Option value="MF">Saint Martin (French part)</Option>
                                    <Option value="PM">Saint Pierre and Miquelon</Option>
                                    <Option value="VC">Saint Vincent and the Grenadines</Option>
                                    <Option value="WS">Samoa</Option>
                                    <Option value="SM">San Marino</Option>
                                    <Option value="ST">Sao Tome and Principe</Option>
                                    <Option value="SA">Saudi Arabia</Option>
                                    <Option value="SN">Senegal</Option>
                                    <Option value="RS">Serbia</Option>
                                    <Option value="SC">Seychelles</Option>
                                    <Option value="SL">Sierra Leone</Option>
                                    <Option value="SG">Singapore</Option>
                                    <Option value="SX">Sint Maarten (Dutch part)</Option>
                                    <Option value="SK">Slovakia</Option>
                                    <Option value="SI">Slovenia</Option>
                                    <Option value="SB">Solomon Islands</Option>
                                    <Option value="SO">Somalia</Option>
                                    <Option value="ZA">South Africa</Option>
                                    <Option value="GS">South Georgia and the South Sandwich Islands</Option>
                                    <Option value="KR">South Korea</Option>
                                    <Option value="SS">South Sudan</Option>
                                    <Option value="ES">Spain</Option>
                                    <Option value="LK">Sri Lanka</Option>
                                    <Option value="SD">Sudan</Option>
                                    <Option value="SR">Suriname</Option>
                                    <Option value="SJ">Svalbard and Jan Mayen</Option>
                                    <Option value="SE">Sweden</Option>
                                    <Option value="CH">Switzerland</Option>
                                    <Option value="SY">Syrian Arab Republic</Option>
                                    <Option value="TW">Taiwan</Option>
                                    <Option value="TJ">Tajikistan</Option>
                                    <Option value="TZ">Tanzania</Option>
                                    <Option value="TH">Thailand</Option>
                                    <Option value="TL">Timor-Leste</Option>
                                    <Option value="TG">Togo</Option>
                                    <Option value="TK">Tokelau</Option>
                                    <Option value="TO">Tonga</Option>
                                    <Option value="TT">Trinidad and Tobago</Option>
                                    <Option value="TN">Tunisia</Option>
                                    <Option value="TR">Turkey</Option>
                                    <Option value="TM">Turkmenistan</Option>
                                    <Option value="TC">Turks and Caicos Islands</Option>
                                    <Option value="TV">Tuvalu</Option>
                                    <Option value="UG">Uganda</Option>
                                    <Option value="UA">Ukraine</Option>
                                    <Option value="AE">United Arab Emirates</Option>
                                    <Option value="GB">United Kingdom</Option>
                                    <Option value="UM">United States Minor Outlying Islands</Option>
                                    <Option value="US">United States</Option>
                                    <Option value="UY">Uruguay</Option>
                                    <Option value="UZ">Uzbekistan</Option>
                                    <Option value="VU">Vanuatu</Option>
                                    <Option value="VE">Venezuela</Option>
                                    <Option value="VN">Vietnam</Option>
                                    <Option value="VG">Virgin Islands, British</Option>
                                    <Option value="VI">Virgin Islands, U.S.</Option>
                                    <Option value="WF">Wallis and Futuna</Option>
                                    <Option value="EH">Western Sahara</Option>
                                    <Option value="YE">Yemen</Option>
                                    <Option value="ZM">Zambia</Option>
                                    <Option value="ZW">Zimbabwe</Option>
                                </Select></div>
                        </div>
                    </div>
                </div>
            </div>
            <h4>Taxes</h4>
            <div>
                <div>
                    <div>
                        Company name
                        <div><input type="text" name="sponsor[company]" id="sponsor_company"/></div>
                    </div><span>Optional. Invoices will be addressed to the company.</span>
                </div>
                <div>
                    <div>
                        VAT number
                        <div><input type="text" value="" name="sponsor[vat_id]" id="sponsor_vat_id"/></div>
                    </div><span>If your company is in the EU but outside of Germany, we need your VAT
                        number to avoid charging you VAT</span>
                </div>
            </div>
            <div>
                <button name="button" type="submit">Proceed to checkout</button>
            </div>
       
    </div>
  </>
    )
}

export default Donate;