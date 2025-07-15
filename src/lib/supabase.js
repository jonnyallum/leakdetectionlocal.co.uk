import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database constants for clean builds
export const QUOTE_STATUS = {
  PENDING: 'pending',
  CONTACTED: 'contacted',
  COMPLETED: 'completed'
}

export const SERVICE_TYPES = {
  WATER_LEAK: 'water_leak_detection',
  CENTRAL_HEATING: 'central_heating_leak',
  UNDERFLOOR_HEATING: 'underfloor_heating_leak',
  UNDERGROUND_WATER: 'underground_water_leak',
  THERMAL_IMAGING: 'thermal_imaging_service',
  EMERGENCY: 'emergency_leak_detection'
}

// Helper functions for database operations
export const insertQuoteRequest = async (quoteData) => {
  try {
    const { data, error } = await supabase
      .from('quote_requests')
      .insert([{
        ...quoteData,
        status: QUOTE_STATUS.PENDING,
        created_at: new Date().toISOString()
      }])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error inserting quote request:', error)
    return { data: null, error }
  }
}

export const getQuoteRequests = async (filters = {}) => {
  try {
    let query = supabase.from('quote_requests').select('*')
    
    // Apply filters if provided
    if (filters.status) {
      query = query.eq('status', filters.status)
    }
    
    const { data, error } = await query.order('created_at', { ascending: false })
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching quote requests:', error)
    return { data: null, error }
  }
}

