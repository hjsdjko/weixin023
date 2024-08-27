package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 水电费信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
@TableName("shuidianfeixinxi")
public class ShuidianfeixinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ShuidianfeixinxiEntity() {
		
	}
	
	public ShuidianfeixinxiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 订单号
	 */
					
	private String dingdanhao;
	
	/**
	 * 用户账号
	 */
					
	private String yonghuzhanghao;
	
	/**
	 * 用户姓名
	 */
					
	private String yonghuxingming;
	
	/**
	 * 家庭住址
	 */
					
	private String jiatingzhuzhi;
	
	/**
	 * 用电量（度）
	 */
					
	private Double yongdianliang;
	
	/**
	 * 电费单价
	 */
					
	private Double dianfeidanjia;
	
	/**
	 * 用水量(m³)
	 */
					
	private Double yongshuiliang;
	
	/**
	 * 水费单价
	 */
					
	private Double shuifeidanjia;
	
	/**
	 * 应收水电费
	 */
					
	private Double yingshoushuidianfei;
	
	/**
	 * 计费日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date jifeiriqi;
	
	/**
	 * 截止日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date jiezhiriqi;
	
	/**
	 * 是否支付
	 */
					
	private String ispay;
	
	/**
	 * 缴费日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date jiaofeiriqi;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：订单号
	 */
	public void setDingdanhao(String dingdanhao) {
		this.dingdanhao = dingdanhao;
	}
	/**
	 * 获取：订单号
	 */
	public String getDingdanhao() {
		return dingdanhao;
	}
	/**
	 * 设置：用户账号
	 */
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
	/**
	 * 设置：用户姓名
	 */
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
	/**
	 * 设置：家庭住址
	 */
	public void setJiatingzhuzhi(String jiatingzhuzhi) {
		this.jiatingzhuzhi = jiatingzhuzhi;
	}
	/**
	 * 获取：家庭住址
	 */
	public String getJiatingzhuzhi() {
		return jiatingzhuzhi;
	}
	/**
	 * 设置：用电量（度）
	 */
	public void setYongdianliang(Double yongdianliang) {
		this.yongdianliang = yongdianliang;
	}
	/**
	 * 获取：用电量（度）
	 */
	public Double getYongdianliang() {
		return yongdianliang;
	}
	/**
	 * 设置：电费单价
	 */
	public void setDianfeidanjia(Double dianfeidanjia) {
		this.dianfeidanjia = dianfeidanjia;
	}
	/**
	 * 获取：电费单价
	 */
	public Double getDianfeidanjia() {
		return dianfeidanjia;
	}
	/**
	 * 设置：用水量(m³)
	 */
	public void setYongshuiliang(Double yongshuiliang) {
		this.yongshuiliang = yongshuiliang;
	}
	/**
	 * 获取：用水量(m³)
	 */
	public Double getYongshuiliang() {
		return yongshuiliang;
	}
	/**
	 * 设置：水费单价
	 */
	public void setShuifeidanjia(Double shuifeidanjia) {
		this.shuifeidanjia = shuifeidanjia;
	}
	/**
	 * 获取：水费单价
	 */
	public Double getShuifeidanjia() {
		return shuifeidanjia;
	}
	/**
	 * 设置：应收水电费
	 */
	public void setYingshoushuidianfei(Double yingshoushuidianfei) {
		this.yingshoushuidianfei = yingshoushuidianfei;
	}
	/**
	 * 获取：应收水电费
	 */
	public Double getYingshoushuidianfei() {
		return yingshoushuidianfei;
	}
	/**
	 * 设置：计费日期
	 */
	public void setJifeiriqi(Date jifeiriqi) {
		this.jifeiriqi = jifeiriqi;
	}
	/**
	 * 获取：计费日期
	 */
	public Date getJifeiriqi() {
		return jifeiriqi;
	}
	/**
	 * 设置：截止日期
	 */
	public void setJiezhiriqi(Date jiezhiriqi) {
		this.jiezhiriqi = jiezhiriqi;
	}
	/**
	 * 获取：截止日期
	 */
	public Date getJiezhiriqi() {
		return jiezhiriqi;
	}
	/**
	 * 设置：是否支付
	 */
	public void setIspay(String ispay) {
		this.ispay = ispay;
	}
	/**
	 * 获取：是否支付
	 */
	public String getIspay() {
		return ispay;
	}
	/**
	 * 设置：缴费日期
	 */
	public void setJiaofeiriqi(Date jiaofeiriqi) {
		this.jiaofeiriqi = jiaofeiriqi;
	}
	/**
	 * 获取：缴费日期
	 */
	public Date getJiaofeiriqi() {
		return jiaofeiriqi;
	}

}
