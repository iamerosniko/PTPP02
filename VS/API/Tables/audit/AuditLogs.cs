using System;

namespace API.Tables.audit
{
  public class AuditLogs
  {
    public Guid AuditLogID { get; set; }
    public string Action { get; set; }
    public string Module { get; set; }
    public string User { get; set; }
    public string Team { get; set; }
    public string Details { get; set; }
    public DateTime ModifiedOn { get; set; }
  }
}
