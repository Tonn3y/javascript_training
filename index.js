        let payrollform = document.getElementById("payrollform")
        payrollform.addEventListener("submit", function (e) {
            e.preventDefault()
            let salary = parseFloat(document.getElementById("salary").value)
            let benefits = parseFloat(document.getElementById("benefits").value)

            if (!salary || !benefits) {
                document.getElementById("error").innerText = "Input all fields kindly."
            }
            else {
                function gross_salary(salary,benefits) {
                    return (salary + benefits)
                }
                let basicsalary = 60000
                let Housingallowance = 20000
                let medicalinsurance = 10000
                let total = gross_salary(salary,benefits)

                function NSSF(total) {
                    if (total >= 18000) {
                        return (0.06 * total)
                    }
                    else {
                        console.log("Cannot deduct NSSF")
                    }
                }
                let a = NSSF(total)

                function NHDF(total) {
                    return (total * 0.015)
                }
                let b = NHDF(total)

                function taxable_income(total, a, b) {
                    return (total - (a + b))
                }
                let c = taxable_income(total, a, b)

                function payee(c) {
                    let rem = 0
                    let paye = 0
                    let relief = 2400
                    if (c <= 24000) {
                        paye = 0
                        return paye
                    } else if (c > 24000) {
                        rem = c - 24000
                        paye = 24000 * 0.1
                    }
                    if (rem > 0) {
                        if (rem > 8333) {
                            rem = rem - 8333
                            paye = paye + (8333 * 0.25)
                        }
                        else {
                            paye = paye + (rem * 0.25)

                            rem = 0
                        }

                    }
                    if (rem > 0) {
                        if (rem > 467667) {
                            rem = rem - 467667
                            paye = paye + (467667 * 0.30)
                        }
                        else {

                            paye = paye + (rem * 0.30)
                            rem = 0
                        }
                    }
                    if (rem > 0) {
                        if (rem > 300000) {
                            rem = rem - 300000
                            paye = paye + (300000 * 0.325)
                        }
                        else {
                            paye = paye + (rem * 0.325)
                            rem = 0
                        }
                    }
                    if (rem > 0) {
                        paye = paye + (rem * 0.35)
                    }
                    return paye - relief
                }

                let d = payee(c)

                function NHIF(total) {
                    if (total <= 5999) {
                        return (150)
                    }
                    else if (total >= 6000 && total <= 7999) {
                        return (300)
                    }
                    else if (total >= 8000 && total <= 11999) {
                        return (300)
                    }
                    else if (total >= 12000 && total <= 14999) {
                        return (500)
                    }
                    else if (total >= 15000 && total <= 19999) {
                        return (600)
                    }
                    else if (total >= 20000 && total <= 24999) {
                        return (750)
                    }
                    else if (total >= 25000 && total <= 29999) {
                        return (850)
                    }
                    else if (total >= 30000 && total <= 34999) {
                        return (900)
                    }
                    else if (total >= 35000 && total <= 39999) {
                        return (950)
                    }
                    else if (total >= 40000 && total <= 44999) {
                        return (1000)
                    }
                    else if (total >= 45000 && total <= 49000) {
                        console.log(1100)
                    }
                    else if (total >= 50000 && total <= 59000) {
                        return (1200)
                    }
                    else if (total >= 60000 && total <= 69000) {
                        return (1300)
                    }
                    else if (total >= 70000 && total <= 79000) {
                        return (1400)
                    }
                    else if (total >= 80000 && total <= 89000) {
                        return (1500)
                    }
                    else if (total >= 90000 && total <= 99000) {
                        return (1600)
                    }
                    else if (total >= 100000) {
                        return (1700)
                    }
                    else {
                        return ("Error")
                    }
                }

                let e = NHIF(total)

                function net_salary(total, a, b, d, e) {
                    return (total - (a + b + d + e))
                }

                let net_pay = net_salary(total, a, b, d, e)

                let tbody = document.getElementById("datatable").getElementsByTagName("tbody")[0]
                let firstrow = tbody.insertRow()
                let grosscell = firstrow.insertCell(0);
                let grossresultcell = firstrow.insertCell(1);
                grosscell.textContent = "Gross Salary"
                grossresultcell.textContent = total

                let secondrow = tbody.insertRow()
                let nssfcell = secondrow.insertCell(0);
                let nssfresultcell = secondrow.insertCell(1);
                nssfcell.textContent = "NSSF"
                nssfresultcell.textContent = a

                let thirdrow = tbody.insertRow()
                let nhifcell = thirdrow.insertCell(0);
                let nhifresultcell = thirdrow.insertCell(1);
                nhifcell.textContent = "NHIF"
                nhifresultcell.textContent = e

                let forthrow = tbody.insertRow()
                let nhdfcell = forthrow.insertCell(0);
                let nhdfresultcell = forthrow.insertCell(1);
                nhdfcell.textContent = "NHDF"
                nhdfresultcell.textContent = b

                let fifthrow = tbody.insertRow()
                let payeecell = fifthrow.insertCell(0);
                let payeeresultcell = fifthrow.insertCell(1);
                payeecell.textContent = "Final payee"
                payeeresultcell.textContent = d

                let sixthrow = tbody.insertRow()
                let netpaycell = sixthrow.insertCell(0);
                let netpayresultcell = sixthrow.insertCell(1);
                netpaycell.textContent = "Net Salary"
                netpayresultcell.textContent = net_pay


            }
        })
        //     if (benefits.length == 0 || salary.length == 0) {
        //         document.getElementById("error").innerText = "Input all fields kindly."
        //     }
        //     else {
        //         let tablebody = document.getElementById("datatable").getElementsByTagName("tbody")[0]
        //         let newrow = tablebody.insertRow()
        //         let salarycell = newrow.insertCell(0);
        //         let benefitscell = insertCell(1);
        //     }

        //     function gross_salary(a, b, c) {
        //         return (a + b + c)
        //     }
        //     let basicsalary = 60000
        //     let Housingallowance = 20000
        //     let medicalinsurance = 10000
        //     let total = gross_salary(basicsalary, Housingallowance, medicalinsurance)

        //     function NSSF(total) {
        //         if (total >= 18000) {
        //             return (0.06 * total)
        //         }
        //         else {
        //             console.log("Cannot deduct NSSF")
        //         }
        //     }
        //     let a = NSSF(total)

        //     function NHDF(total) {
        //         return (total * 0.015)
        //     }
        //     let b = NHDF(total)

        //     function taxable_income(total, a, b) {
        //         return (total - (a + b))
        //     }
        //     let c = taxable_income(total, a, b)

        //     function payee(c) {
        //         let rem = 0
        //         let paye = 0
        //         let relief = 2400
        //         if (c <= 24000) {
        //             paye = 0
        //             return paye
        //         } else if (c > 24000) {
        //             rem = c - 24000
        //             paye = 24000 * 0.1
        //         }
        //         if (rem > 0) {
        //             if (rem > 8333) {
        //                 rem = rem - 8333
        //                 paye = paye + (8333 * 0.25)
        //             }
        //             else {
        //                 paye = paye + (rem * 0.25)

        //                 rem = 0
        //             }

        //         }
        //         if (rem > 0) {
        //             if (rem > 467667) {
        //                 rem = rem - 467667
        //                 paye = paye + (467667 * 0.30)
        //             }
        //             else {

        //                 paye = paye + (rem * 0.30)
        //                 rem = 0
        //             }
        //         }
        //         if (rem > 0) {
        //             if (rem > 300000) {
        //                 rem = rem - 300000
        //                 paye = paye + (300000 * 0.325)
        //             }
        //             else {
        //                 paye = paye + (rem * 0.325)
        //                 rem = 0
        //             }
        //         }
        //         if (rem > 0) {
        //             paye = paye + (rem * 0.35)
        //         }
        //         return paye - relief
        //     }

        //     let d = payee(c)

        //     function NHIF(total) {
        //         if (total <= 5999) {
        //             return (150)
        //         }
        //         else if (total >= 6000 && total <= 7999) {
        //             return (300)
        //         }
        //         else if (total >= 8000 && total <= 11999) {
        //             return (300)
        //         }
        //         else if (total >= 12000 && total <= 14999) {
        //             return (500)
        //         }
        //         else if (total >= 15000 && total <= 19999) {
        //             return (600)
        //         }
        //         else if (total >= 20000 && total <= 24999) {
        //             return (750)
        //         }
        //         else if (total >= 25000 && total <= 29999) {
        //             return (850)
        //         }
        //         else if (total >= 30000 && total <= 34999) {
        //             return (900)
        //         }
        //         else if (total >= 35000 && total <= 39999) {
        //             return (950)
        //         }
        //         else if (total >= 40000 && total <= 44999) {
        //             return (1000)
        //         }
        //         else if (total >= 45000 && total <= 49000) {
        //             console.log(1100)
        //         }
        //         else if (total >= 50000 && total <= 59000) {
        //             return (1200)
        //         }
        //         else if (total >= 60000 && total <= 69000) {
        //             return (1300)
        //         }
        //         else if (total >= 70000 && total <= 79000) {
        //             return (1400)
        //         }
        //         else if (total >= 80000 && total <= 89000) {
        //             return (1500)
        //         }
        //         else if (total >= 90000 && total <= 99000) {
        //             return (1600)
        //         }
        //         else if (total >= 100000) {
        //             return (1700)
        //         }
        //         else {
        //             return ("Error")
        //         }
        //     }

        //     let e = NHIF(total)

        //     function net_salary(total, a, b, d, e) {
        //         console.log(total - (a + b + d + e))
        //     }
        // })