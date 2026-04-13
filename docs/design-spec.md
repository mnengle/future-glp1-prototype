# GLP-1 Prototype Design Spec

## Overview
Full Medvi-style GLP-1 weight loss telehealth flow, Future branded, powered by SteadyMD API with bundled payment via Stripe. Async-only consultations. Mocked pharmacy fulfillment/shipping.

## Tech Stack
- Next.js 14 (App Router), Tailwind CSS, Vercel
- SteadyMD API (sandbox) for clinical workflow
- Stripe for bundled payment
- Resend for magic link auth
- Vercel Postgres for data
- LillyDirect as target pharmacy (NCPDP 3692539)

## Patient Flow
1. Landing page → goal selector → start assessment
2. Multi-step health assessment wizard (8 substeps)
3. Medication selection (semaglutide vs tirzepatide, injection vs oral)
4. Pharmacy preference (partner default + patient choice via SteadyMD search)
5. Stripe checkout (bundled consult + medication)
6. Provider review waiting state (SteadyMD async consult)
7. Approval + treatment plan display
8. Order tracking dashboard (mocked shipping)

## SteadyMD Integration
- Patient creation → Episode of Care → Intake submission → Async consult → Rx retrieval
- SNS webhooks for consult status updates
- Pharmacy search API for patient choice

## Auth
- Email magic link via Resend, session cookie

## Database
- patients, assessments, orders, magic_links tables in Vercel Postgres
