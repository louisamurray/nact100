const natPlans = [
    { id: 'stopIncomeInsurance', text: 'Stop work on the Income Insurance Scheme.', checkedDate: null },
    { id: 'stopIndustryPlans', text: 'Stop work on Industry Transformation Plans.', checkedDate: null },
    { id: 'stopLakeOnslowScheme', text: 'Stop work on the Lake Onslow pumped hydro scheme.', checkedDate: null },
    { id: 'doubleRenewableEnergy', text: 'Begin efforts to double renewable energy production, including a NPS on Renewable Electricity Generation.', checkedDate: null },
    { id: 'withdrawLGWM', text: 'Withdraw central government from Let’s Get Wellington Moving (LGWM).', checkedDate: null },
    { id: 'meetCouncilsCycloneRecovery', text: 'Meet with councils and communities to establish regional requirements for recovery from Cyclone Gabrielle and other recent major flooding events.', checkedDate: null },
    { id: 'additionalOrdersCycloneRecovery', text: 'Make any additional Orders in Council needed to speed up cyclone and flood recovery efforts.', checkedDate: null },
    { id: 'reducePublicSectorExpenditure', text: 'Start reducing public sector expenditure, including consultant and contractor expenditure.', checkedDate: null },
    { id: 'narrowReserveBankMandate', text: 'Introduce legislation to narrow the Reserve Bank’s mandate to price stability.', checkedDate: '2023-12-10'},
    { id: 'removeAucklandFuelTax', text: 'Introduce legislation to remove the Auckland Fuel Tax.', checkedDate: '2024-02-08' },
    { id: 'cancelFuelTaxHikes', text: 'Cancel fuel tax hikes.', checkedDate: null },
    { id: 'newGPSRoads', text: 'Begin work on a new GPS reflecting the new Roads of National Significance and new public transport priorities.', checkedDate: null },
    { id: 'repealCleanCarDiscount', text: 'Repeal the Clean Car Discount scheme by 31 December 2023.', checkedDate: '2023-12-14'},
    { id: 'stopSpeedLimitReductions', text: 'Stop blanket speed limit reductions and start work on replacing the Land Transport Rule: Setting of Speed Limits 2022.', checkedDate: null },
    { id: 'stopAucklandLightRail', text: 'Stop central government work on the Auckland Light Rail project.', checkedDate: null },
    { id: 'repealFairPayAgreement', text: 'Repeal the Fair Pay Agreement legislation.', checkedDate: '2023-12-14'},
    { id: 'restore90DayTrialPeriods', text: 'Introduce legislation to restore 90-day trial periods for all businesses.', checkedDate: '2023-12-21' },
    { id: 'improveQualityOfRegulation', text: 'Start work to improve the quality of regulation.', checkedDate: null },
    { id: 'workOnNationalInfrastructureAgency', text: 'Begin work on a National Infrastructure Agency.', checkedDate: null },
    { id: 'repealWaterServicesEntitiesAct', text: 'Introduce legislation to repeal the Water Services Entities Act 2022.', checkedDate: null },
    { id: 'repealSpatialPlanningAct', text: 'Repeal the Spatial Planning and Natural and Built Environment Act and introduce a fast-track consenting regime.', checkedDate: '2023-12-20' },
    { id: 'ceaseSNAAreas', text: 'Begin to cease implementation of new Significant Natural Areas and seek advice on operation of the areas.', checkedDate: null },
    { id: 'amendOverseasInvestmentAct', text: 'Take policy decisions to amend the Overseas Investment Act 2005 to make it easier for build-to-rent housing to be developed in New Zealand.', checkedDate: null },
    { id: 'enableMoreHouses', text: 'Begin work to enable more houses to be built, by implementing the Going for Housing Growth policy and making the Medium Density Residential Standards optional for councils.', checkedDate: null },
    { id: 'abolishPrisonerReductionTarget', text: 'Abolish the previous Government’s prisoner reduction target.', checkedDate: null },
    { id: 'legislationBanGangPatches', text: 'Introduce legislation to ban gang patches, stop gang members gathering in public, and stop known gang offenders from communicating with one another.', checkedDate: null },
    { id: 'policeSearchPowers', text: 'Give Police greater powers to search gang members for firearms and make gang membership an aggravating factor at sentencing.', checkedDate: null },
    { id: 'stopTaxpayerFundingForCulturalReports', text: 'Stop taxpayer funding for section 27 cultural reports.', checkedDate: null },
    { id: 'extendRehabProgrammesToRemandPrisoners', text: 'Introduce legislation to extend eligibility to offence-based rehabilitation programmes to remand prisoners.', checkedDate: null },
    { id: 'crackDownYouthOffending', text: 'Begin work to crack down on serious youth offending.', checkedDate: null },
    { id: 'enableVirtualCourtParticipation', text: 'Enable more virtual participation in court proceedings.', checkedDate: null },
    { id: 'repealReplaceArmsActPart6', text: 'Begin to repeal and replace Part 6 of the Arms Act 1983 relating to clubs and ranges.', checkedDate: null },
    { id: 'stopWorkOnHePuapua', text: 'Stop all work on He Puapua.', checkedDate: null },
    { id: 'improveHealthWorkforceSecurity', text: 'Improve security for the health workforce in hospital emergency departments.', checkedDate: null },
    { id: 'moUWithWaikatoForMedicalSchool', text: 'Sign an MoU with Waikato University to progress a third medical school.', checkedDate: null },
    { id: 'reserveAgainstWHOAmmendments', text: 'By 1 December 2023, lodge a reservation against adopting amendments to WHO health regulations to allow the government to consider these against a “national interest test”.', checkedDate: null },
    { id: 'schoolCurriculumRequirement', text: 'Require primary and intermediate schools to teach an hour of reading, writing and maths per day starting in 2024.', checkedDate: null },
    { id: 'banCellphonesInSchools', text: 'Ban the use of cellphones in schools.', checkedDate: null },
    { id: 'appointExpertGroupForCurriculum', text: 'Appoint an Expert Group to redesign the English and maths curricula for primary school students.', checkedDate: null },
    { id: 'beginDisestablishingTePukenga', text: 'Begin disestablishing Te Pukenga.', checkedDate: null },
    { id: 'workOnBetterPublicServices', text: 'Begin work on delivering better public services and strengthening democracy.', checkedDate: null },
    { id: 'setHealthSystemTargets', text: 'Set five major targets for health system, including for wait times and cancer treatment.', checkedDate: null },
    { id: 'disestablishMaoriHealthAuthority', text: 'Introduce legislation to disestablish the Māori Health Authority.', checkedDate: null },
    { id: 'extendFreeBreastCancerScreening', text: 'Take first steps to extend free breast cancer screening to those aged up to 74.', checkedDate: null },
    { id: 'repealSmokefreeEnvironmentsAmendments', text: 'Repeal amendments to the Smokefree Environments and Regulated Products Act 1990 and regulations.', checkedDate: null },
    { id: 'allowPseudoephedrineSale', text: 'Allow the sale of cold medication containing pseudoephedrine.', checkedDate: null },
    { id: 'repealTherapeuticsProductsAct', text: 'Begin work to repeal the Therapeutics Products Act 2023.', checkedDate: null },
    { id: 'priorityOneSocialHousing', text: 'Establish a priority one category on the social housing waitlist to move families out of emergency housing into permanent homes more quickly.', checkedDate: null },
    { id: 'reviewKaingaOra', text: 'Commission an independent review into Kāinga Ora’s financial situation, procurement, and asset management.', checkedDate: null },
  ];
  
  export default natPlans;
  