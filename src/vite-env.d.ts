/// <reference types="vite/client" />

export interface LaunchData {
    flight_number: number
    mission_name: string
    mission_id: any[]
    upcoming: boolean
    launch_year: string
    launch_date_unix: number
    launch_date_utc: string
    launch_date_local: string
    is_tentative: boolean
    tentative_max_precision: string
    tbd: boolean
    launch_window: number
    rocket: {
      rocket_id: string
      rocket_name: string
      rocket_type: string
      first_stage: {
        cores: {
          core_serial: string
          flight: number
          block: any
          gridfins: boolean
          legs: boolean
          reused: boolean
          land_success: boolean | any
          landing_intent: boolean
          landing_type: string | any
          landing_vehicle: string | any
        }
      }
      second_stage: {
        block: number
        payloads: {
          payload_id: string
          norad_id: any[]
          reused: boolean
          customers: string[]
          nationality: string
          manufacturer: string
          payload_type: string
          payload_mass_kg: number
          payload_mass_lbs: number
          orbit: string
          orbit_params: {
            reference_system: string
            regime: string
            longitude: any | number 
            semi_major_axis_km: any | number
            eccentricity: any | number
            periapsis_km: number
            apoapsis_km: number
            inclination_deg: number
            period_min: any |number
            lifespan_years: any |number
            epoch: any |number
            mean_motion: any |number
            raan: any |number
            arg_of_pericenter: any |number
            mean_anomaly: any |number
          }
        }
      }
      fairings: {
        reused: boolean
        recovery_attempt: boolean
        recovered: boolean
        ship: any | string
      }
    }
    ships: any[] 
    telemetry: Telemetry
    launch_site: LaunchSite
    launch_success: boolean
    launch_failure_details: LaunchFailureDetails
    links: Links
    details: string
    static_fire_date_utc: string
    static_fire_date_unix: number
    timeline: Timeline
    crew: string | any
  }
  
  export interface Telemetry {
    flight_club: any
  }
  
  export interface LaunchSite {
    site_id: string
    site_name: string
    site_name_long: string
  }
  
  export interface LaunchFailureDetails {
    time: number
    altitude: any
    reason: string
  }
  
  export interface Links {
    mission_patch: string
    mission_patch_small: string
    reddit_campaign:  |string
    reddit_launch: any |string
    reddit_recovery: any |string
    reddit_media: any |string
    presskit: any |string
    article_link: string
    wikipedia: string
    video_link: string
    youtube_id: string
    flickr_images: any[]
  }
  
  export interface Timeline {
    webcast_liftoff: number
  }
  